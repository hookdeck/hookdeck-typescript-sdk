/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";
import { EventBulkRetryCreateRequestQueryHeadersOne } from "./EventBulkRetryCreateRequestQueryHeadersOne";

export const EventBulkRetryCreateRequestQueryHeaders: core.serialization.Schema<
    serializers.EventBulkRetryCreateRequestQueryHeaders.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryHeaders
> = core.serialization.undiscriminatedUnion([core.serialization.string(), EventBulkRetryCreateRequestQueryHeadersOne]);

export declare namespace EventBulkRetryCreateRequestQueryHeaders {
    type Raw = string | EventBulkRetryCreateRequestQueryHeadersOne.Raw;
}
