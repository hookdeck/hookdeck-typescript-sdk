/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { ShortEventDataParsedQueryOne } from "./ShortEventDataParsedQueryOne";

export const ShortEventDataParsedQuery: core.serialization.Schema<
    serializers.ShortEventDataParsedQuery.Raw,
    Hookdeck.ShortEventDataParsedQuery
> = core.serialization.undiscriminatedUnion([core.serialization.string().optional(), ShortEventDataParsedQueryOne]);

export declare namespace ShortEventDataParsedQuery {
    type Raw = (string | null | undefined) | ShortEventDataParsedQueryOne.Raw;
}