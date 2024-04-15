/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const VerificationEbayType: core.serialization.Schema<
    serializers.VerificationEbayType.Raw,
    Hookdeck.VerificationEbayType
> = core.serialization.enum_(["ebay"]);

export declare namespace VerificationEbayType {
    type Raw = "ebay";
}