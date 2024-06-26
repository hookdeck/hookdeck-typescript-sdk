/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Hookdeck from "../../../../../api/index";
import * as core from "../../../../../core";
import { IssueUpdateRequestStatus } from "../../types/IssueUpdateRequestStatus";

export const IssueUpdateRequest: core.serialization.Schema<
    serializers.IssueUpdateRequest.Raw,
    Hookdeck.IssueUpdateRequest
> = core.serialization.object({
    status: IssueUpdateRequestStatus,
});

export declare namespace IssueUpdateRequest {
    interface Raw {
        status: IssueUpdateRequestStatus.Raw;
    }
}
