/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { IssueTriggerStrategy } from "./IssueTriggerStrategy";
import { IssueTriggerDeliveryConfigsConnections } from "./IssueTriggerDeliveryConfigsConnections";

export const IssueTriggerDeliveryConfigs: core.serialization.ObjectSchema<
    serializers.IssueTriggerDeliveryConfigs.Raw,
    Hookdeck.IssueTriggerDeliveryConfigs
> = core.serialization.object({
    strategy: IssueTriggerStrategy,
    connections: IssueTriggerDeliveryConfigsConnections,
});

export declare namespace IssueTriggerDeliveryConfigs {
    interface Raw {
        strategy: IssueTriggerStrategy.Raw;
        connections: IssueTriggerDeliveryConfigsConnections.Raw;
    }
}
