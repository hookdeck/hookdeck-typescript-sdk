/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const IssueListRequestStatus: core.serialization.Schema<
    serializers.IssueListRequestStatus.Raw,
    Hookdeck.IssueListRequestStatus
> = core.serialization.enum_(["OPENED", "IGNORED", "ACKNOWLEDGED", "RESOLVED"]);

export declare namespace IssueListRequestStatus {
    type Raw = "OPENED" | "IGNORED" | "ACKNOWLEDGED" | "RESOLVED";
}
