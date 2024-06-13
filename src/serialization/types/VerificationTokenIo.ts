/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationTokenIoConfigs } from "./VerificationTokenIoConfigs";

export const VerificationTokenIo: core.serialization.ObjectSchema<
    serializers.VerificationTokenIo.Raw,
    Hookdeck.VerificationTokenIo
> = core.serialization.object({
    configs: VerificationTokenIoConfigs.optional(),
});

export declare namespace VerificationTokenIo {
    interface Raw {
        configs?: VerificationTokenIoConfigs.Raw | null;
    }
}
