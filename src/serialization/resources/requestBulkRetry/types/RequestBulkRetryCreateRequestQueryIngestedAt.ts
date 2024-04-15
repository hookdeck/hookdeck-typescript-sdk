/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";
import { RequestBulkRetryCreateRequestQueryIngestedAtAny } from "./RequestBulkRetryCreateRequestQueryIngestedAtAny";

export const RequestBulkRetryCreateRequestQueryIngestedAt: core.serialization.Schema<
    serializers.RequestBulkRetryCreateRequestQueryIngestedAt.Raw,
    Hookdeck.RequestBulkRetryCreateRequestQueryIngestedAt
> = core.serialization.undiscriminatedUnion([
    core.serialization.date(),
    RequestBulkRetryCreateRequestQueryIngestedAtAny,
]);

export declare namespace RequestBulkRetryCreateRequestQueryIngestedAt {
    type Raw = string | RequestBulkRetryCreateRequestQueryIngestedAtAny.Raw;
}