/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationCloudSignalType } from "./VerificationCloudSignalType";
import { VerificationCloudSignalConfigs } from "./VerificationCloudSignalConfigs";

export const VerificationCloudSignal: core.serialization.ObjectSchema<
    serializers.VerificationCloudSignal.Raw,
    Hookdeck.VerificationCloudSignal
> = core.serialization.object({
    type: VerificationCloudSignalType,
    configs: VerificationCloudSignalConfigs.optional(),
});

export declare namespace VerificationCloudSignal {
    interface Raw {
        type: VerificationCloudSignalType.Raw;
        configs?: VerificationCloudSignalConfigs.Raw | null;
    }
}