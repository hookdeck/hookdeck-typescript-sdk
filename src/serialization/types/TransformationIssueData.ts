/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { TransformationExecution } from "./TransformationExecution";
import { EventAttempt } from "./EventAttempt";

export const TransformationIssueData: core.serialization.ObjectSchema<
    serializers.TransformationIssueData.Raw,
    Hookdeck.TransformationIssueData
> = core.serialization.object({
    transformationExecution: core.serialization.property("transformation_execution", TransformationExecution),
    triggerAttempt: core.serialization.property("trigger_attempt", EventAttempt.optional()),
});

export declare namespace TransformationIssueData {
    interface Raw {
        transformation_execution: TransformationExecution.Raw;
        trigger_attempt?: EventAttempt.Raw | null;
    }
}