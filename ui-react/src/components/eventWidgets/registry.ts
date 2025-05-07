import { EventWidgetRegistration } from './types';
import { EventType } from '../../generated/proto';
import { LlmCallStartedSummary, LlmCallStartedTable, LlmCallStartedPromptTab } from './LlmCallStarted';

/**
 * Registry of widgets for different event types
 */
export const eventWidgetRegistry: EventWidgetRegistration[] = [
  {
    eventType: EventType.EVENT_TYPE_LLM_CALL_STARTED,
    summaryWidget: LlmCallStartedSummary,
    tableWidget: LlmCallStartedTable,
    extraTabs: [
      {
        key: 'prompt',
        title: 'Full Prompt',
        component: LlmCallStartedPromptTab
      }
    ]
  },
  // Additional event registrations will follow
];