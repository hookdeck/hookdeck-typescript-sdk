/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { TransformationExecutionLogLevel } from "./TransformationExecutionLogLevel";

export const TransformationIssueAggregationKeys: core.serialization.ObjectSchema<
    serializers.TransformationIssueAggregationKeys.Raw,
    Hookdeck.TransformationIssueAggregationKeys
> = core.serialization.object({
    transformationId: core.serialization.property(
        "transformation_id",
        core.serialization.list(core.serialization.string())
    ),
    logLevel: core.serialization.property("log_level", TransformationExecutionLogLevel),
});

export declare namespace TransformationIssueAggregationKeys {
    interface Raw {
        transformation_id: string[];
        log_level: TransformationExecutionLogLevel.Raw;
    }
}