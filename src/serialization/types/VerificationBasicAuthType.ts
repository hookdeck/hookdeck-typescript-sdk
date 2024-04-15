/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationBasicAuthType: core.serialization.Schema<
    serializers.VerificationBasicAuthType.Raw,
    Hookdeck.VerificationBasicAuthType
> = core.serialization.enum_(["basic_auth"]);

export declare namespace VerificationBasicAuthType {
    type Raw = "basic_auth";
}