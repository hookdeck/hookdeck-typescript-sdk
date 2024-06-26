/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { VerificationWooCommerceConfigs } from "./VerificationWooCommerceConfigs";

export const VerificationWooCommerce: core.serialization.ObjectSchema<
    serializers.VerificationWooCommerce.Raw,
    Hookdeck.VerificationWooCommerce
> = core.serialization.object({
    configs: VerificationWooCommerceConfigs.optional(),
});

export declare namespace VerificationWooCommerce {
    interface Raw {
        configs?: VerificationWooCommerceConfigs.Raw | null;
    }
}
