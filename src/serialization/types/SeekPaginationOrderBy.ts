/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const SeekPaginationOrderBy: core.serialization.Schema<
    serializers.SeekPaginationOrderBy.Raw,
    Hookdeck.SeekPaginationOrderBy
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace SeekPaginationOrderBy {
    type Raw = string | string[];
}
