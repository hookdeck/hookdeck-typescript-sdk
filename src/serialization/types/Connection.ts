/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { Destination } from "./Destination";
import { Source } from "./Source";
import { Rule } from "./Rule";

export const Connection: core.serialization.ObjectSchema<serializers.Connection.Raw, Hookdeck.Connection> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string().optional(),
        fullName: core.serialization.property("full_name", core.serialization.string().optional()),
        description: core.serialization.string().optional(),
        teamId: core.serialization.property("team_id", core.serialization.string()),
        destination: Destination,
        source: Source,
        rules: core.serialization.list(Rule).optional(),
        disabledAt: core.serialization.property("disabled_at", core.serialization.date().optional()),
        pausedAt: core.serialization.property("paused_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date()),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
    });

export declare namespace Connection {
    interface Raw {
        id: string;
        name?: string | null;
        full_name?: string | null;
        description?: string | null;
        team_id: string;
        destination: Destination.Raw;
        source: Source.Raw;
        rules?: Rule.Raw[] | null;
        disabled_at?: string | null;
        paused_at?: string | null;
        updated_at: string;
        created_at: string;
    }
}
