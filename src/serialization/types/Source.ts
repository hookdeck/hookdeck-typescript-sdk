/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { SourceVerification } from "./SourceVerification";
import { SourceAllowedHttpMethod } from "./SourceAllowedHttpMethod";
import { SourceCustomResponse } from "./SourceCustomResponse";
import { SourceAllowedHttpMethodItem } from "./SourceAllowedHttpMethodItem";

export const Source: core.serialization.ObjectSchema<serializers.Source.Raw, Hookdeck.Source> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        url: core.serialization.string(),
        verification: SourceVerification.optional(),
        allowedHttpMethods: core.serialization.property("allowed_http_methods", SourceAllowedHttpMethod.optional()),
        customResponse: core.serialization.property("custom_response", SourceCustomResponse.optional()),
        disabledAt: core.serialization.property("disabled_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace Source {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        team_id: string;
        url: string;
        verification?: SourceVerification.Raw | null;
        allowed_http_methods?: (SourceAllowedHttpMethod.Raw | undefined) | null;
        custom_response?: SourceCustomResponse.Raw | null;
        disabled_at?: string | null;
        updated_at: string;
        created_at: string;
    }
}
