/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const IssueCount: core.serialization.ObjectSchema<serializers.IssueCount.Raw, Hookdeck.IssueCount> =
    core.serialization.object({
        count: core.serialization.number(),
    });

export declare namespace IssueCount {
    interface Raw {
        count: number;
    }
}
