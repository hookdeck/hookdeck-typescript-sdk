/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";
import { EventBulkRetryCreateRequestQueryCliIdAll } from "./EventBulkRetryCreateRequestQueryCliIdAll";

export const EventBulkRetryCreateRequestQueryCliId: core.serialization.Schema<
    serializers.EventBulkRetryCreateRequestQueryCliId.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryCliId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    EventBulkRetryCreateRequestQueryCliIdAll,
    core.serialization.list(core.serialization.string()),
]);

export declare namespace EventBulkRetryCreateRequestQueryCliId {
    type Raw = string | EventBulkRetryCreateRequestQueryCliIdAll.Raw | string[];
}