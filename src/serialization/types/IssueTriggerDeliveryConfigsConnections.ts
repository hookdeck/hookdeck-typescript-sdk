/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const IssueTriggerDeliveryConfigsConnections: core.serialization.Schema<
    serializers.IssueTriggerDeliveryConfigsConnections.Raw,
    Hookdeck.IssueTriggerDeliveryConfigsConnections
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace IssueTriggerDeliveryConfigsConnections {
    type Raw = string | string[];
}