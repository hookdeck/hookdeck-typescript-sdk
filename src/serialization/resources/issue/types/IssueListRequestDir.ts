/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";

export const IssueListRequestDir: core.serialization.Schema<
    serializers.IssueListRequestDir.Raw,
    Hookdeck.IssueListRequestDir
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace IssueListRequestDir {
    type Raw = "asc" | "desc";
}
