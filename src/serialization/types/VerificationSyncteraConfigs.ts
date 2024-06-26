/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const VerificationSyncteraConfigs: core.serialization.ObjectSchema<
    serializers.VerificationSyncteraConfigs.Raw,
    Hookdeck.VerificationSyncteraConfigs
> = core.serialization.object({
    webhookSecretKey: core.serialization.property("webhook_secret_key", core.serialization.string()),
});

export declare namespace VerificationSyncteraConfigs {
    interface Raw {
        webhook_secret_key: string;
    }
}
