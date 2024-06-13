/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationPersonaConfigs } from "./VerificationPersonaConfigs";

export const VerificationPersona: core.serialization.ObjectSchema<
    serializers.VerificationPersona.Raw,
    Hookdeck.VerificationPersona
> = core.serialization.object({
    configs: VerificationPersonaConfigs.optional(),
});

export declare namespace VerificationPersona {
    interface Raw {
        configs?: VerificationPersonaConfigs.Raw | null;
    }
}
