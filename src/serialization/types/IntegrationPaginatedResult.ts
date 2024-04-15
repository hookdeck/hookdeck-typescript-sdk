/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { SeekPagination } from "./SeekPagination";
import { Integration } from "./Integration";

export const IntegrationPaginatedResult: core.serialization.ObjectSchema<
    serializers.IntegrationPaginatedResult.Raw,
    Hookdeck.IntegrationPaginatedResult
> = core.serialization.object({
    pagination: SeekPagination.optional(),
    count: core.serialization.number().optional(),
    models: core.serialization.list(Integration).optional(),
});

export declare namespace IntegrationPaginatedResult {
    interface Raw {
        pagination?: SeekPagination.Raw | null;
        count?: number | null;
        models?: Integration.Raw[] | null;
    }
}