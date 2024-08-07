/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationTebexConfigs: core.serialization.ObjectSchema<
    serializers.VerificationTebexConfigs.Raw,
    Hookdeck.VerificationTebexConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationTebexConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
