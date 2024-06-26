/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { SeekPagination } from "./SeekPagination";
import { IssueTrigger } from "./IssueTrigger";

export const IssueTriggerPaginatedResult: core.serialization.ObjectSchema<
    serializers.IssueTriggerPaginatedResult.Raw,
    Hookdeck.IssueTriggerPaginatedResult
> = core.serialization.object({
    pagination: SeekPagination.optional(),
    count: core.serialization.number().optional(),
    models: core.serialization.list(IssueTrigger).optional(),
});

export declare namespace IssueTriggerPaginatedResult {
    interface Raw {
        pagination?: SeekPagination.Raw | null;
        count?: number | null;
        models?: IssueTrigger.Raw[] | null;
    }
}
