/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const IssueType: core.serialization.Schema<serializers.IssueType.Raw, Hookdeck.IssueType> =
    core.serialization.enum_(["delivery", "transformation", "backpressure"]);

export declare namespace IssueType {
    type Raw = "delivery" | "transformation" | "backpressure";
}