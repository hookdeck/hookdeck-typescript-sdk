/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { SourceCustomResponseContentType } from "./SourceCustomResponseContentType";

export const SourceCustomResponse: core.serialization.ObjectSchema<
    serializers.SourceCustomResponse.Raw,
    Hookdeck.SourceCustomResponse
> = core.serialization.object({
    contentType: core.serialization.property("content_type", SourceCustomResponseContentType),
    body: core.serialization.string(),
});

export declare namespace SourceCustomResponse {
    interface Raw {
        content_type: SourceCustomResponseContentType.Raw;
        body: string;
    }
}
