/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";
import { RequestBulkRetryCreateRequestQueryEventsCountAll } from "./RequestBulkRetryCreateRequestQueryEventsCountAll";

export const RequestBulkRetryCreateRequestQueryEventsCount: core.serialization.Schema<
    serializers.RequestBulkRetryCreateRequestQueryEventsCount.Raw,
    Hookdeck.RequestBulkRetryCreateRequestQueryEventsCount
> = core.serialization.undiscriminatedUnion([
    core.serialization.number(),
    RequestBulkRetryCreateRequestQueryEventsCountAll,
    core.serialization.list(core.serialization.number()),
]);

export declare namespace RequestBulkRetryCreateRequestQueryEventsCount {
    type Raw = number | RequestBulkRetryCreateRequestQueryEventsCountAll.Raw | number[];
}
