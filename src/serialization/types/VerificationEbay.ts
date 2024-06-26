/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationEbayConfigs } from "./VerificationEbayConfigs";

export const VerificationEbay: core.serialization.ObjectSchema<
    serializers.VerificationEbay.Raw,
    Hookdeck.VerificationEbay
> = core.serialization.object({
    configs: VerificationEbayConfigs.optional(),
});

export declare namespace VerificationEbay {
    interface Raw {
        configs?: VerificationEbayConfigs.Raw | null;
    }
}
