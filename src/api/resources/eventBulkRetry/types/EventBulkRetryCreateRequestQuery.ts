/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../..";

/**
 * Filter properties for the events to be included in the bulk retry
 */
export interface EventBulkRetryCreateRequestQuery {
    /** Filter by event IDs */
    id?: Hookdeck.EventBulkRetryCreateRequestQueryId;
    /** Lifecyle status of the event */
    status?: Hookdeck.EventBulkRetryCreateRequestQueryStatus;
    /** Filter by webhook connection IDs */
    webhookId?: Hookdeck.EventBulkRetryCreateRequestQueryWebhookId;
    /** Filter by destination IDs */
    destinationId?: Hookdeck.EventBulkRetryCreateRequestQueryDestinationId;
    /** Filter by source IDs */
    sourceId?: Hookdeck.EventBulkRetryCreateRequestQuerySourceId;
    /** Filter by number of attempts */
    attempts?: Hookdeck.EventBulkRetryCreateRequestQueryAttempts;
    /** Filter by HTTP response status code */
    responseStatus?: Hookdeck.EventBulkRetryCreateRequestQueryResponseStatus;
    /** Filter by `successful_at` date using a date operator */
    successfulAt?: Hookdeck.EventBulkRetryCreateRequestQuerySuccessfulAt;
    /** Filter by `created_at` date using a date operator */
    createdAt?: Hookdeck.EventBulkRetryCreateRequestQueryCreatedAt;
    /** Filter by error code code */
    errorCode?: Hookdeck.EventBulkRetryCreateRequestQueryErrorCode;
    /** Filter by CLI IDs. `?[any]=true` operator for any CLI. */
    cliId?: Hookdeck.EventBulkRetryCreateRequestQueryCliId;
    /** Filter by `last_attempt_at` date using a date operator */
    lastAttemptAt?: Hookdeck.EventBulkRetryCreateRequestQueryLastAttemptAt;
    /** URL Encoded string of the value to match partially to the body, headers, parsed_query or path */
    searchTerm?: string;
    /** URL Encoded string of the JSON to match to the data headers */
    headers?: Hookdeck.EventBulkRetryCreateRequestQueryHeaders;
    /** URL Encoded string of the JSON to match to the data body */
    body?: Hookdeck.EventBulkRetryCreateRequestQueryBody;
    /** URL Encoded string of the JSON to match to the parsed query (JSON representation of the query) */
    parsedQuery?: Hookdeck.EventBulkRetryCreateRequestQueryParsedQuery;
    /** URL Encoded string of the value to match partially to the path */
    path?: string;
    cliUserId?: Hookdeck.EventBulkRetryCreateRequestQueryCliUserId;
    issueId?: Hookdeck.EventBulkRetryCreateRequestQueryIssueId;
    eventDataId?: Hookdeck.EventBulkRetryCreateRequestQueryEventDataId;
    bulkRetryId?: Hookdeck.EventBulkRetryCreateRequestQueryBulkRetryId;
}