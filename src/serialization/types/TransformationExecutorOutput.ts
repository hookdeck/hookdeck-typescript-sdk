/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { TransformationExecutionLogLevel } from "./TransformationExecutionLogLevel";
import { TransformationExecutorOutputRequest } from "./TransformationExecutorOutputRequest";
import { ConsoleLine } from "./ConsoleLine";

export const TransformationExecutorOutput: core.serialization.ObjectSchema<
    serializers.TransformationExecutorOutput.Raw,
    Hookdeck.TransformationExecutorOutput
> = core.serialization.object({
    requestId: core.serialization.property("request_id", core.serialization.string().optional()),
    transformationId: core.serialization.property("transformation_id", core.serialization.string().optional()),
    executionId: core.serialization.property("execution_id", core.serialization.string().optional()),
    logLevel: core.serialization.property("log_level", TransformationExecutionLogLevel),
    request: TransformationExecutorOutputRequest.optional(),
    console: core.serialization.list(ConsoleLine).optional(),
});

export declare namespace TransformationExecutorOutput {
    interface Raw {
        request_id?: string | null;
        transformation_id?: string | null;
        execution_id?: string | null;
        log_level: TransformationExecutionLogLevel.Raw;
        request?: TransformationExecutorOutputRequest.Raw | null;
        console?: ConsoleLine.Raw[] | null;
    }
}