/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationXeroConfigs } from "./VerificationXeroConfigs";

export const VerificationXero: core.serialization.ObjectSchema<
    serializers.VerificationXero.Raw,
    Hookdeck.VerificationXero
> = core.serialization.object({
    configs: VerificationXeroConfigs.optional(),
});

export declare namespace VerificationXero {
    interface Raw {
        configs?: VerificationXeroConfigs.Raw | null;
    }
}
