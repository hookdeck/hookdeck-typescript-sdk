/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const EventBulkRetryCreateRequestQueryResponseStatusAll: core.serialization.ObjectSchema<
    serializers.EventBulkRetryCreateRequestQueryResponseStatusAll.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryResponseStatusAll
> = core.serialization.object({
    gt: core.serialization.number().optional(),
    gte: core.serialization.number().optional(),
    le: core.serialization.number().optional(),
    lte: core.serialization.number().optional(),
    any: core.serialization.boolean().optional(),
    all: core.serialization.boolean().optional(),
    contains: core.serialization.number().optional(),
});

export declare namespace EventBulkRetryCreateRequestQueryResponseStatusAll {
    interface Raw {
        gt?: number | null;
        gte?: number | null;
        le?: number | null;
        lte?: number | null;
        any?: boolean | null;
        all?: boolean | null;
        contains?: number | null;
    }
}
