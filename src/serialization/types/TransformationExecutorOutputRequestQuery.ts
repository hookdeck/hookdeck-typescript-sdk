/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { TransformationExecutorOutputRequestQueryZero } from "./TransformationExecutorOutputRequestQueryZero";

export const TransformationExecutorOutputRequestQuery: core.serialization.Schema<
    serializers.TransformationExecutorOutputRequestQuery.Raw,
    Hookdeck.TransformationExecutorOutputRequestQuery
> = core.serialization.undiscriminatedUnion([
    TransformationExecutorOutputRequestQueryZero.optional(),
    core.serialization.string(),
]);

export declare namespace TransformationExecutorOutputRequestQuery {
    type Raw = (TransformationExecutorOutputRequestQueryZero.Raw | null | undefined) | string;
}
