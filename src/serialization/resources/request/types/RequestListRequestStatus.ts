/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Hookdeck from "../../../../api";
import * as core from "../../../../core";

export const RequestListRequestStatus: core.serialization.Schema<
    serializers.RequestListRequestStatus.Raw,
    Hookdeck.RequestListRequestStatus
> = core.serialization.enum_(["accepted", "rejected"]);

export declare namespace RequestListRequestStatus {
    type Raw = "accepted" | "rejected";
}