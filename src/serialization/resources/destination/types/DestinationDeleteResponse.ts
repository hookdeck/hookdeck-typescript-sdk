/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const DestinationDeleteResponse: core.serialization.ObjectSchema<
    serializers.DestinationDeleteResponse.Raw,
    Hookdeck.DestinationDeleteResponse
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace DestinationDeleteResponse {
    interface Raw {
        id: string;
    }
}