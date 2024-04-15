/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const EventBulkRetryCreateRequestQueryLastAttemptAtAny: core.serialization.ObjectSchema<
    serializers.EventBulkRetryCreateRequestQueryLastAttemptAtAny.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryLastAttemptAtAny
> = core.serialization.object({
    gt: core.serialization.date().optional(),
    gte: core.serialization.date().optional(),
    le: core.serialization.date().optional(),
    lte: core.serialization.date().optional(),
    any: core.serialization.boolean().optional(),
});

export declare namespace EventBulkRetryCreateRequestQueryLastAttemptAtAny {
    interface Raw {
        gt?: string | null;
        gte?: string | null;
        le?: string | null;
        lte?: string | null;
        any?: boolean | null;
    }
}