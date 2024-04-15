/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { VerificationCourierType } from "./VerificationCourierType";
import { VerificationCourierConfigs } from "./VerificationCourierConfigs";

export const VerificationCourier: core.serialization.ObjectSchema<
    serializers.VerificationCourier.Raw,
    Hookdeck.VerificationCourier
> = core.serialization.object({
    type: VerificationCourierType,
    configs: VerificationCourierConfigs.optional(),
});

export declare namespace VerificationCourier {
    interface Raw {
        type: VerificationCourierType.Raw;
        configs?: VerificationCourierConfigs.Raw | null;
    }
}