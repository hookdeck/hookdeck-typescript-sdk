/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const IgnoredEventBulkRetryCreateRequestQueryWebhookId: core.serialization.Schema<
    serializers.IgnoredEventBulkRetryCreateRequestQueryWebhookId.Raw,
    Hookdeck.IgnoredEventBulkRetryCreateRequestQueryWebhookId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace IgnoredEventBulkRetryCreateRequestQueryWebhookId {
    type Raw = string | string[];
}
