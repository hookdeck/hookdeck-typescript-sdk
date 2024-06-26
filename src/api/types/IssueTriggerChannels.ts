/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

/**
 * Notification channels object for the specific channel type
 */
export interface IssueTriggerChannels {
    slack?: Hookdeck.IssueTriggerSlackChannel;
    opsgenie?: Hookdeck.IssueTriggerIntegrationChannel;
    email?: Hookdeck.IssueTriggerEmailChannel;
}
