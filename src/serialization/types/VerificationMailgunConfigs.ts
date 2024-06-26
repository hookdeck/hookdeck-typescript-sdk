/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationMailgunConfigs: core.serialization.ObjectSchema<
    serializers.VerificationMailgunConfigs.Raw,
    Hookdeck.VerificationMailgunConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationMailgunConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
