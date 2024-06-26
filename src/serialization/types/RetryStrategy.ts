/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";

export const RetryStrategy: core.serialization.Schema<serializers.RetryStrategy.Raw, Hookdeck.RetryStrategy> =
    core.serialization.enum_(["linear", "exponential"]);

export declare namespace RetryStrategy {
    type Raw = "linear" | "exponential";
}
