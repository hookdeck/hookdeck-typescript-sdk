/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const RequestBulkRetryCreateRequestQueryIngestedAtAny: core.serialization.ObjectSchema<
    serializers.RequestBulkRetryCreateRequestQueryIngestedAtAny.Raw,
    Hookdeck.RequestBulkRetryCreateRequestQueryIngestedAtAny
> = core.serialization.object({
    gt: core.serialization.date().optional(),
    gte: core.serialization.date().optional(),
    le: core.serialization.date().optional(),
    lte: core.serialization.date().optional(),
    any: core.serialization.boolean().optional(),
});

export declare namespace RequestBulkRetryCreateRequestQueryIngestedAtAny {
    interface Raw {
        gt?: string | null;
        gte?: string | null;
        le?: string | null;
        lte?: string | null;
        any?: boolean | null;
    }
}
