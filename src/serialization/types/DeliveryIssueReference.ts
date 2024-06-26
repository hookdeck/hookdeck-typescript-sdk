/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const DeliveryIssueReference: core.serialization.ObjectSchema<
    serializers.DeliveryIssueReference.Raw,
    Hookdeck.DeliveryIssueReference
> = core.serialization.object({
    eventId: core.serialization.property("event_id", core.serialization.string()),
    attemptId: core.serialization.property("attempt_id", core.serialization.string()),
});

export declare namespace DeliveryIssueReference {
    interface Raw {
        event_id: string;
        attempt_id: string;
    }
}
