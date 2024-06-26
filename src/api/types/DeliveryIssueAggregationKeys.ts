/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

/**
 * Keys used as the aggregation keys a 'delivery' type issue
 */
export interface DeliveryIssueAggregationKeys {
    webhookId: string[];
    responseStatus: number[];
    errorCode: Hookdeck.AttemptErrorCodes[];
}
