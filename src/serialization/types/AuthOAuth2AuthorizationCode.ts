/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { DestinationAuthMethodOAuth2AuthorizationCodeConfig } from "./DestinationAuthMethodOAuth2AuthorizationCodeConfig";

export const AuthOAuth2AuthorizationCode: core.serialization.ObjectSchema<
    serializers.AuthOAuth2AuthorizationCode.Raw,
    Hookdeck.AuthOAuth2AuthorizationCode
> = core.serialization.object({
    config: DestinationAuthMethodOAuth2AuthorizationCodeConfig.optional(),
});

export declare namespace AuthOAuth2AuthorizationCode {
    interface Raw {
        config?: DestinationAuthMethodOAuth2AuthorizationCodeConfig.Raw | null;
    }
}