/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { TransformationExecutionLogLevel } from "./TransformationExecutionLogLevel";
import { IssueTriggerTransformationConfigsTransformations } from "./IssueTriggerTransformationConfigsTransformations";

export const IssueTriggerTransformationConfigs: core.serialization.ObjectSchema<
    serializers.IssueTriggerTransformationConfigs.Raw,
    Hookdeck.IssueTriggerTransformationConfigs
> = core.serialization.object({
    logLevel: core.serialization.property("log_level", TransformationExecutionLogLevel),
    transformations: IssueTriggerTransformationConfigsTransformations,
});

export declare namespace IssueTriggerTransformationConfigs {
    interface Raw {
        log_level: TransformationExecutionLogLevel.Raw;
        transformations: IssueTriggerTransformationConfigsTransformations.Raw;
    }
}
