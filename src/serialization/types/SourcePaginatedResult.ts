/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { SeekPagination } from "./SeekPagination";
import { Source } from "./Source";

export const SourcePaginatedResult: core.serialization.ObjectSchema<
    serializers.SourcePaginatedResult.Raw,
    Hookdeck.SourcePaginatedResult
> = core.serialization.object({
    pagination: SeekPagination.optional(),
    count: core.serialization.number().optional(),
    models: core.serialization.list(Source).optional(),
});

export declare namespace SourcePaginatedResult {
    interface Raw {
        pagination?: SeekPagination.Raw | null;
        count?: number | null;
        models?: Source.Raw[] | null;
    }
}
