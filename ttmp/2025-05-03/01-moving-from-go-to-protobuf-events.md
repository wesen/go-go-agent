# Refactoring Guide: Migrating from model/event.go to Protobuf Events

## Introduction

This document outlines a comprehensive strategy for migrating from the custom JSON-based event system in `pkg/model/event.go` to the Protobuf-generated events in `proto/events.pb.go`. This migration will provide better type safety, potentially improved performance, and a more standardized approach to event handling.

## Current State Comparison

### Event Type Representation

| Aspect | model/event.go | proto/events.pb.go |
|--------|----------------|-------------------|
| Event Type Definition | String constants (`EventTypeRunStarted`) | Protobuf enum (`EventType_EVENT_TYPE_RUN_STARTED`) |
| Payload Storage | Generic `Event` with `json.RawMessage` | Strong typed `Event` with `oneof payload` field |
| Serialization | JSON | Protocol Buffers (binary) |
| Typing | Go struct with JSON tags | Generated from Protobuf IDL |

### Key Structural Differences

1. **Base Event Structure**:
   - `model/event.go`: Uses a generic structure with JSON payload
   ```go
   type Event struct {
       EventID   string          `json:"event_id"`
       Timestamp string          `json:"timestamp"`
       EventType string          `json:"event_type"`
       Payload   json.RawMessage `json:"payload"`
       RunID     string          `json:"run_id"`
   }
   ```
   - `proto/events.pb.go`: Uses a typed structure with specific payload fields
   ```go
   type Event struct {
       EventId   string
       Timestamp *timestamppb.Timestamp
       EventType EventType
       RunId     *string
       Payload   isEvent_Payload // oneof field
   }
   ```

2. **Data Type Differences**:
   - Integers: `int` vs `int32`
   - JSON: `json.RawMessage` vs `*structpb.Struct` or specific message types
   - Timestamps: `string` vs `*timestamppb.Timestamp`
   - Optionality: `omitempty` vs Protobuf `optional`

3. **Field Discrepancies**:
   - `call_id` in LLM-related payloads (present in Proto, absent in Go)
   - `tool_call_id` in Tool-related payloads
   - `TaskType` and `TaskGoal` present in several Go payloads but missing in Proto

## Migration Strategy

### Phase 1: Preparation

1. **Create Conversion Utilities**
   
   Create a new package `pkg/events/conversion` with utilities to convert between model events and Protobuf events:

   ```go
   // pkg/events/conversion/converter.go
   package conversion

   import (
       "encoding/json"
       "github.com/go-go-golems/go-go-agent/pkg/events" // Protobuf events
       "github.com/go-go-golems/go-go-agent/pkg/model"  // Old model events
       "github.com/pkg/errors"
       "google.golang.org/protobuf/types/known/structpb"
       "google.golang.org/protobuf/types/known/timestamppb"
       "time"
   )

   // ModelToProto converts a model.Event to a events.Event
   func ModelToProto(modelEvent *model.Event) (*events.Event, error) {
       // Implementation details below
   }

   // ProtoToModel converts a events.Event to a model.Event
   func ProtoToModel(protoEvent *events.Event) (*model.Event, error) {
       // Implementation details below
   }
   ```

2. **Write Type-Specific Converters**

   For each payload type, create a converter function:

   ```go
   func convertRunStartedPayload(data []byte) (*events.RunStartedPayload, error) {
       var modelPayload model.RunStartedPayload
       if err := json.Unmarshal(data, &modelPayload); err != nil {
           return nil, errors.Wrap(err, "unmarshal run_started payload")
       }
       
       // Convert InputData from json.RawMessage to *structpb.Struct
       var inputData map[string]interface{}
       if err := json.Unmarshal(modelPayload.InputData, &inputData); err != nil {
           return nil, errors.Wrap(err, "unmarshal input_data")
       }
       inputDataStruct, err := structpb.NewStruct(inputData)
       if err != nil {
           return nil, errors.Wrap(err, "convert input_data to structpb.Struct")
       }
       
       // Similarly convert Config
       var config map[string]interface{}
       if err := json.Unmarshal(modelPayload.Config, &config); err != nil {
           return nil, errors.Wrap(err, "unmarshal config")
       }
       configStruct, err := structpb.NewStruct(config)
       if err != nil {
           return nil, errors.Wrap(err, "convert config to structpb.Struct")
       }
       
       // Parse timestamp
       t, err := time.Parse(time.RFC3339, modelPayload.TimestampUTC)
       if err != nil {
           return nil, errors.Wrap(err, "parse timestamp")
       }
       
       return &events.RunStartedPayload{
           InputData:    inputDataStruct,
           Config:       configStruct,
           RunMode:      modelPayload.RunMode,
           TimestampUtc: timestamppb.New(t),
       }, nil
   }
   ```

3. **Create Conversion Test Suite**

   Write thorough tests for conversion in both directions to ensure equivalence.

### Phase 2: Dual Publishing

1. **Modify Event Producers**

   Update code that produces events to publish to both systems:

   ```go
   func publishEvent(modelEvent *model.Event) error {
       // Publish to original system
       if err := originalPublisher.Publish(modelEvent); err != nil {
           return err
       }
       
       // Convert and publish to new system
       protoEvent, err := conversion.ModelToProto(modelEvent)
       if err != nil {
           log.Warn().Err(err).Msg("Failed to convert event to proto format")
           return nil // Don't fail if conversion fails during transition
       }
       
       return protoPublisher.Publish(protoEvent)
   }
   ```

2. **Implement Feature Flags**

   Add feature flags to control the flow of events:

   ```go
   var (
       UseProtoEvents    = false // Global feature flag
       DualPublishEvents = true  // Publish to both systems during transition
   )
   ```

### Phase 3: Incremental Consumer Migration

1. **Identify Event Consumers**

   Map out all code that consumes events and prioritize for migration:
   - Event logging systems
   - Monitoring and metrics
   - Event-driven workflows
   - UI/visualization components

2. **Update Event Consumers Iteratively**

   For each consumer, update to work with Protobuf events:

   ```go
   func processEvent(ctx context.Context, eventData []byte) error {
       if UseProtoEvents {
           var protoEvent events.Event
           if err := proto.Unmarshal(eventData, &protoEvent); err != nil {
               return err
           }
           return processProtoEvent(ctx, &protoEvent)
       } else {
           var modelEvent model.Event
           if err := json.Unmarshal(eventData, &modelEvent); err != nil {
               return err
           }
           return processModelEvent(ctx, &modelEvent)
       }
   }
   ```

### Phase 4: Protocol Buffer Enhancements

1. **Update Protobuf Definitions**

   Address any missing fields in the Protobuf definition:

   ```protobuf
   message StepStartedPayload {
       int32 step = 1;
       string node_id = 2;
       string node_goal = 3;
       string root_id = 4;
       // Add missing fields
       string task_type = 5;
   }
   ```

2. **Regenerate Protocol Buffer Code**

   After updating the definitions:

   ```bash
   protoc --go_out=. --go_opt=paths=source_relative proto/events.proto
   ```

### Phase 5: Completion

1. **Remove Old Event Code**

   Once all consumers have been migrated:
   - Set `UseProtoEvents = true` globally
   - Set `DualPublishEvents = false`
   - Remove conversion utilities
   - Eventually remove the old `model/event.go` code

2. **Documentation and Training**

   - Update all documentation to reference the new event system
   - Provide examples for teams that need to work with events

## Example Conversions

Below are detailed examples of converting between specific event types:

### Example 1: RunStartedEvent

**Model to Proto Conversion:**

```go
func convertRunStartedModelToProto(modelEvent *model.Event) (*events.Event, error) {
    var payload model.RunStartedPayload
    if err := json.Unmarshal(modelEvent.Payload, &payload); err != nil {
        return nil, err
    }
    
    // Convert InputData from json.RawMessage to *structpb.Struct
    inputDataStruct, err := jsonToStruct(payload.InputData)
    if err != nil {
        return nil, err
    }
    
    // Convert Config from json.RawMessage to *structpb.Struct
    configStruct, err := jsonToStruct(payload.Config)
    if err != nil {
        return nil, err
    }
    
    // Parse timestamp string to timestamp.Timestamp
    timestampProto, err := parseTimestamp(modelEvent.Timestamp)
    if err != nil {
        return nil, err
    }
    
    // Parse event-specific timestamp
    timestampUTC, err := parseTimestamp(payload.TimestampUTC)
    if err != nil {
        return nil, err
    }
    
    // Construct the protocol buffer event
    protoEvent := &events.Event{
        EventId:   modelEvent.EventID,
        Timestamp: timestampProto,
        EventType: events.EventType_EVENT_TYPE_RUN_STARTED,
        RunId:     &modelEvent.RunID,
        Payload: &events.Event_RunStarted{
            RunStarted: &events.RunStartedPayload{
                InputData:    inputDataStruct,
                Config:       configStruct,
                RunMode:      payload.RunMode,
                TimestampUtc: timestampUTC,
            },
        },
    }
    
    return protoEvent, nil
}
```

**Helper Function for JSON to Struct Conversion:**

```go
func jsonToStruct(data json.RawMessage) (*structpb.Struct, error) {
    if len(data) == 0 {
        return nil, nil
    }
    
    var jsonMap map[string]interface{}
    if err := json.Unmarshal(data, &jsonMap); err != nil {
        return nil, errors.Wrap(err, "unmarshal JSON to map")
    }
    
    structProto, err := structpb.NewStruct(jsonMap)
    if err != nil {
        return nil, errors.Wrap(err, "convert map to structpb.Struct")
    }
    
    return structProto, nil
}
```

### Example 2: NodeStatusChangedEvent

**Model to Proto Conversion:**

```go
func convertNodeStatusChangedModelToProto(modelEvent *model.Event) (*events.Event, error) {
    var payload model.NodeStatusChangedPayload
    if err := json.Unmarshal(modelEvent.Payload, &payload); err != nil {
        return nil, err
    }
    
    // Parse timestamp
    timestampProto, err := parseTimestamp(modelEvent.Timestamp)
    if err != nil {
        return nil, err
    }
    
    // Construct the protocol buffer event
    protoEvent := &events.Event{
        EventId:   modelEvent.EventID,
        Timestamp: timestampProto,
        EventType: events.EventType_EVENT_TYPE_NODE_STATUS_CHANGED,
        RunId:     &modelEvent.RunID,
        Payload: &events.Event_NodeStatusChanged{
            NodeStatusChanged: &events.NodeStatusChangePayload{
                NodeId:    payload.NodeID,
                NodeGoal:  payload.NodeGoal,
                OldStatus: payload.OldStatus,
                NewStatus: payload.NewStatus,
            },
        },
    }
    
    // Handle optional Step field
    if payload.Step != 0 {
        step := int32(payload.Step)
        protoEvent.GetNodeStatusChanged().Step = &step
    }
    
    return protoEvent, nil
}
```

## Handling Type Differences

### Timestamps

Convert between string and Protobuf timestamp:

```go
func parseTimestamp(timeStr string) (*timestamppb.Timestamp, error) {
    if timeStr == "" {
        return nil, nil
    }
    
    t, err := time.Parse(time.RFC3339, timeStr)
    if err != nil {
        return nil, errors.Wrap(err, "parse timestamp")
    }
    
    return timestamppb.New(t), nil
}

func formatTimestamp(ts *timestamppb.Timestamp) string {
    if ts == nil {
        return ""
    }
    
    return ts.AsTime().Format(time.RFC3339)
}
```

### Structs/JSON

Convert between json.RawMessage and structpb.Struct:

```go
func structToJSON(structProto *structpb.Struct) (json.RawMessage, error) {
    if structProto == nil {
        return nil, nil
    }
    
    mapData := structProto.AsMap()
    jsonData, err := json.Marshal(mapData)
    if err != nil {
        return nil, errors.Wrap(err, "marshal struct to JSON")
    }
    
    return jsonData, nil
}
```

## Testing Strategy

1. **Unit Tests for Converters**

   Create extensive tests for each converter function:

   ```go
   func TestRunStartedConversion(t *testing.T) {
       // Create a model event
       modelEvent := &model.Event{
           EventID:   "test-id",
           Timestamp: "2025-05-03T12:34:56Z",
           EventType: model.EventTypeRunStarted,
           RunID:     "run-123",
           Payload:   createRunStartedPayload(),
       }
       
       // Convert to proto
       protoEvent, err := conversion.ModelToProto(modelEvent)
       require.NoError(t, err)
       
       // Convert back to model
       roundTripEvent, err := conversion.ProtoToModel(protoEvent)
       require.NoError(t, err)
       
       // Compare (with some normalization for type differences)
       assert.Equal(t, modelEvent.EventID, roundTripEvent.EventID)
       assert.Equal(t, modelEvent.EventType, roundTripEvent.EventType)
       assert.Equal(t, modelEvent.RunID, roundTripEvent.RunID)
       
       // Compare payloads (requires special handling due to JSON marshaling)
       var originalPayload, roundTripPayload model.RunStartedPayload
       require.NoError(t, json.Unmarshal(modelEvent.Payload, &originalPayload))
       require.NoError(t, json.Unmarshal(roundTripEvent.Payload, &roundTripPayload))
       
       assert.Equal(t, originalPayload.RunMode, roundTripPayload.RunMode)
       // Additional comparisons for complex fields
   }
   ```

2. **Integration Tests**

   Test event flow through producers and consumers:

   ```go
   func TestEventFlowWithProtoConversion(t *testing.T) {
       // Setup test producer and consumer
       producer := setupTestProducer()
       consumer := setupTestConsumer()
       
       // Create and publish test event
       originalEvent := createTestEvent()
       require.NoError(t, producer.Publish(originalEvent))
       
       // Consume event
       receivedEvent := consumer.WaitForEvent(5 * time.Second)
       require.NotNil(t, receivedEvent)
       
       // Verify event contents
       assert.Equal(t, originalEvent.EventID, receivedEvent.EventID)
       // More verification...
   }
   ```

## Implementation Timeline

1. **Week 1-2**: Create conversion utilities and test suite
2. **Week 3-4**: Implement dual publishing and feature flags
3. **Week 5-8**: Migrate event consumers incrementally (priority order)
4. **Week 9**: Update Protocol Buffer definitions if needed
5. **Week 10-12**: Complete migration, clean up, and documentation

## Conclusion

This migration will provide significant benefits in type safety, performance, and standardization. The incremental approach allows for safe verification at each step and minimizes risk during the transition period.

By following this guide, teams can systematically migrate from the JSON-based event system to the Protobuf-based system while maintaining backward compatibility during the transition. 