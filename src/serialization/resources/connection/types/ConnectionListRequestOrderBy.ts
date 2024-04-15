/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const ConnectionListRequestOrderBy: core.serialization.Schema<
    serializers.ConnectionListRequestOrderBy.Raw,
    Hookdeck.ConnectionListRequestOrderBy
> = core.serialization.enum_([
    "created_at",
    "updated_at",
    "sources.updated_at",
    "sources.created_at",
    "destinations.updated_at",
    "destinations.created_at",
]);

export declare namespace ConnectionListRequestOrderBy {
    type Raw =
        | "created_at"
        | "updated_at"
        | "sources.updated_at"
        | "sources.created_at"
        | "destinations.updated_at"
        | "destinations.created_at";
}