/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const Verification3DEyeType: core.serialization.Schema<
    serializers.Verification3DEyeType.Raw,
    Hookdeck.Verification3DEyeType
> = core.serialization.enum_(["three_d_eye"]);

export declare namespace Verification3DEyeType {
    type Raw = "three_d_eye";
}