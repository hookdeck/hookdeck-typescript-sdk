/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";
import { ShortEventData } from "./ShortEventData";

export const Bookmark: core.serialization.ObjectSchema<serializers.Bookmark.Raw, Hookdeck.Bookmark> =
    core.serialization.object({
        id: core.serialization.string(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        webhookId: core.serialization.property("webhook_id", core.serialization.string()),
        eventDataId: core.serialization.property("event_data_id", core.serialization.string()),
        label: core.serialization.string(),
        alias: core.serialization.string().optional(),
        data: ShortEventData.optional(),
        lastUsedAt: core.serialization.property("last_used_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace Bookmark {
    interface Raw {
        id: string;
        team_id: string;
        webhook_id: string;
        event_data_id: string;
        label: string;
        alias?: string | null;
        data?: ShortEventData.Raw | null;
        last_used_at?: string | null;
        updated_at: string;
        created_at: string;
    }
}