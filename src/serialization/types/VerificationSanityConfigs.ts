/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationSanityConfigs: core.serialization.ObjectSchema<
    serializers.VerificationSanityConfigs.Raw,
    Hookdeck.VerificationSanityConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationSanityConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}