/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationTwilioConfigs } from "./VerificationTwilioConfigs";

export const VerificationTwilio: core.serialization.ObjectSchema<
    serializers.VerificationTwilio.Raw,
    Hookdeck.VerificationTwilio
> = core.serialization.object({
    configs: VerificationTwilioConfigs.optional(),
});

export declare namespace VerificationTwilio {
    interface Raw {
        configs?: VerificationTwilioConfigs.Raw | null;
    }
}
