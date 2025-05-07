// This file will be created when running npm run generate-proto
// It serves as a placeholder until the actual proto files are generated

// This will be replaced by the generated protobuf TypeScript definitions
export interface Event {
  eventId?: string;
  timestamp?: Date;
  eventType?: EventType;
  runId?: string;
  
  // These are the different payload types
  llmCallStarted?: LlmCallStartedPayload;
  llmCallCompleted?: any;
  toolInvoked?: any;
  toolReturned?: any;
  nodeCreated?: any;
  stepStarted?: any;
  stepFinished?: any;
  nodeStatusChanged?: any;
  planReceived?: any;
  nodeAdded?: any;
  edgeAdded?: any;
  innerGraphBuilt?: any;
  nodeResultAvailable?: any;
  runStarted?: any;
  runFinished?: any;
  runError?: any;
  unknownPayload?: any;
}

// Define payload interfaces
export interface LlmCallStartedPayload {
  agent_class?: string;
  model?: string;
  prompt?: LlmMessage[] | string | any;
  prompt_preview?: string;
  step?: number;
  node_id?: string;
  action_name?: string;
  call_id?: string;
}

export interface LlmMessage {
  role?: string;
  content?: string;
}

// EventType enum
export enum EventType {
  EVENT_TYPE_UNSPECIFIED = 0,
  EVENT_TYPE_STEP_STARTED = 1,
  EVENT_TYPE_STEP_FINISHED = 2,
  EVENT_TYPE_NODE_STATUS_CHANGED = 3,
  EVENT_TYPE_LLM_CALL_STARTED = 4,
  EVENT_TYPE_LLM_CALL_COMPLETED = 5,
  EVENT_TYPE_TOOL_INVOKED = 6,
  EVENT_TYPE_TOOL_RETURNED = 7,
  EVENT_TYPE_NODE_CREATED = 8,
  EVENT_TYPE_PLAN_RECEIVED = 9,
  EVENT_TYPE_NODE_ADDED = 10,
  EVENT_TYPE_EDGE_ADDED = 11,
  EVENT_TYPE_INNER_GRAPH_BUILT = 12,
  EVENT_TYPE_NODE_RESULT_AVAILABLE = 13,
  EVENT_TYPE_RUN_STARTED = 14,
  EVENT_TYPE_RUN_FINISHED = 15,
  EVENT_TYPE_RUN_ERROR = 16,
}