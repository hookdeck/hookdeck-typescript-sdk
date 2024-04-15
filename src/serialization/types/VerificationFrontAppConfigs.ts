/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationFrontAppConfigs: core.serialization.ObjectSchema<
    serializers.VerificationFrontAppConfigs.Raw,
    Hookdeck.VerificationFrontAppConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationFrontAppConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}