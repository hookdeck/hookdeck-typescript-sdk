/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { IntegrationProvider } from "./IntegrationProvider";
import { IntegrationFeature } from "./IntegrationFeature";
import { IntegrationConfigs } from "./IntegrationConfigs";

export const Integration: core.serialization.ObjectSchema<serializers.Integration.Raw, Hookdeck.Integration> =
    core.serialization.object({
        id: core.serialization.string(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        label: core.serialization.string(),
        provider: IntegrationProvider,
        features: core.serialization.list(IntegrationFeature),
        configs: IntegrationConfigs,
        sources: core.serialization.list(core.serialization.string()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace Integration {
    interface Raw {
        id: string;
        team_id: string;
        label: string;
        provider: IntegrationProvider.Raw;
        features: IntegrationFeature.Raw[];
        configs: IntegrationConfigs.Raw;
        sources: string[];
        updated_at: string;
        created_at: string;
    }
}
