/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { HmacIntegrationConfigs } from "./HmacIntegrationConfigs";
import { ApiKeyIntegrationConfigs } from "./ApiKeyIntegrationConfigs";
import { HandledApiKeyIntegrationConfigs } from "./HandledApiKeyIntegrationConfigs";
import { HandledHmacConfigs } from "./HandledHmacConfigs";
import { BasicAuthIntegrationConfigs } from "./BasicAuthIntegrationConfigs";
import { ShopifyIntegrationConfigs } from "./ShopifyIntegrationConfigs";
import { IntegrationConfigsSix } from "./IntegrationConfigsSix";

export const IntegrationConfigs: core.serialization.Schema<
    serializers.IntegrationConfigs.Raw,
    Hookdeck.IntegrationConfigs
> = core.serialization.undiscriminatedUnion([
    HmacIntegrationConfigs,
    ApiKeyIntegrationConfigs,
    HandledApiKeyIntegrationConfigs,
    HandledHmacConfigs,
    BasicAuthIntegrationConfigs,
    ShopifyIntegrationConfigs,
    IntegrationConfigsSix,
]);

export declare namespace IntegrationConfigs {
    type Raw =
        | HmacIntegrationConfigs.Raw
        | ApiKeyIntegrationConfigs.Raw
        | HandledApiKeyIntegrationConfigs.Raw
        | HandledHmacConfigs.Raw
        | BasicAuthIntegrationConfigs.Raw
        | ShopifyIntegrationConfigs.Raw
        | IntegrationConfigsSix.Raw;
}