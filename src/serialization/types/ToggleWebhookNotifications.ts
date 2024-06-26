/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { TopicsValue } from "./TopicsValue";

export const ToggleWebhookNotifications: core.serialization.ObjectSchema<
    serializers.ToggleWebhookNotifications.Raw,
    Hookdeck.ToggleWebhookNotifications
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    topics: core.serialization.list(TopicsValue).optional(),
    sourceId: core.serialization.property("source_id", core.serialization.string()),
});

export declare namespace ToggleWebhookNotifications {
    interface Raw {
        enabled: boolean;
        topics?: TopicsValue.Raw[] | null;
        source_id: string;
    }
}
