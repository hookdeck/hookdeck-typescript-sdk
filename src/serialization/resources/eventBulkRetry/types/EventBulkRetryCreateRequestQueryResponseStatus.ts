/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";
import { EventBulkRetryCreateRequestQueryResponseStatusAll } from "./EventBulkRetryCreateRequestQueryResponseStatusAll";

export const EventBulkRetryCreateRequestQueryResponseStatus: core.serialization.Schema<
    serializers.EventBulkRetryCreateRequestQueryResponseStatus.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryResponseStatus
> = core.serialization.undiscriminatedUnion([
    core.serialization.number(),
    EventBulkRetryCreateRequestQueryResponseStatusAll,
    core.serialization.list(core.serialization.number()),
]);

export declare namespace EventBulkRetryCreateRequestQueryResponseStatus {
    type Raw = number | EventBulkRetryCreateRequestQueryResponseStatusAll.Raw | number[];
}