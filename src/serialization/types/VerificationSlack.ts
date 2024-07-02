/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationSlackConfigs } from "./VerificationSlackConfigs";

export const VerificationSlack: core.serialization.ObjectSchema<
    serializers.VerificationSlack.Raw,
    Hookdeck.VerificationSlack
> = core.serialization.object({
    configs: VerificationSlackConfigs.optional(),
});

export declare namespace VerificationSlack {
    interface Raw {
        configs?: VerificationSlackConfigs.Raw | null;
    }
}