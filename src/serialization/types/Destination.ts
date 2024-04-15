/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { DestinationRateLimitPeriod } from "./DestinationRateLimitPeriod";
import { DestinationHttpMethod } from "./DestinationHttpMethod";
import { DestinationAuthMethodConfig } from "./DestinationAuthMethodConfig";

export const Destination: core.serialization.ObjectSchema<serializers.Destination.Raw, Hookdeck.Destination> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        pathForwardingDisabled: core.serialization.property(
            "path_forwarding_disabled",
            core.serialization.boolean().optional()
        ),
        url: core.serialization.string().optional(),
        cliPath: core.serialization.property("cli_path", core.serialization.string().optional()),
        rateLimit: core.serialization.property("rate_limit", core.serialization.number().optional()),
        rateLimitPeriod: core.serialization.property("rate_limit_period", DestinationRateLimitPeriod.optional()),
        httpMethod: core.serialization.property("http_method", DestinationHttpMethod.optional()),
        authMethod: core.serialization.property("auth_method", DestinationAuthMethodConfig.optional()),
        disabledAt: core.serialization.property("disabled_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace Destination {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        team_id: string;
        path_forwarding_disabled?: boolean | null;
        url?: string | null;
        cli_path?: string | null;
        rate_limit?: number | null;
        rate_limit_period?: DestinationRateLimitPeriod.Raw | null;
        http_method?: DestinationHttpMethod.Raw | null;
        auth_method?: DestinationAuthMethodConfig.Raw | null;
        disabled_at?: string | null;
        updated_at: string;
        created_at: string;
    }
}