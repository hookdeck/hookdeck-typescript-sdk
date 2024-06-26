/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const IntegrationFeature: core.serialization.Schema<
    serializers.IntegrationFeature.Raw,
    Hookdeck.IntegrationFeature
> = core.serialization.enum_(["VERIFICATION", "HANDSHAKE"]);

export declare namespace IntegrationFeature {
    type Raw = "VERIFICATION" | "HANDSHAKE";
}
