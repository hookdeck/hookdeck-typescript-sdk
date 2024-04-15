/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationEbayConfigs: core.serialization.ObjectSchema<
    serializers.VerificationEbayConfigs.Raw,
    Hookdeck.VerificationEbayConfigs
> = core.serialization.object({
    environment: core.serialization.string(),
    clientId: core.serialization.property("client_id", core.serialization.string()),
    clientSecret: core.serialization.property("client_secret", core.serialization.string()),
    devId: core.serialization.property("dev_id", core.serialization.string()),
    verificationToken: core.serialization.property("verification_token", core.serialization.string()),
});

export declare namespace VerificationEbayConfigs {
    interface Raw {
        environment: string;
        client_id: string;
        client_secret: string;
        dev_id: string;
        verification_token: string;
    }
}