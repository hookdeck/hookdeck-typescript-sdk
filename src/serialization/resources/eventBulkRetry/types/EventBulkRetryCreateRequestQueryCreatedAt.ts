/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";
import { EventBulkRetryCreateRequestQueryCreatedAtAny } from "./EventBulkRetryCreateRequestQueryCreatedAtAny";

export const EventBulkRetryCreateRequestQueryCreatedAt: core.serialization.Schema<
    serializers.EventBulkRetryCreateRequestQueryCreatedAt.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryCreatedAt
> = core.serialization.undiscriminatedUnion([core.serialization.date(), EventBulkRetryCreateRequestQueryCreatedAtAny]);

export declare namespace EventBulkRetryCreateRequestQueryCreatedAt {
    type Raw = string | EventBulkRetryCreateRequestQueryCreatedAtAny.Raw;
}