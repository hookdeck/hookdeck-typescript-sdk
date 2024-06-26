/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

export type Rule = Hookdeck.Rule.Retry | Hookdeck.Rule.Filter | Hookdeck.Rule.Transform | Hookdeck.Rule.Delay;

export declare namespace Rule {
    interface Retry extends Hookdeck.RetryRule {
        type: "retry";
    }

    interface Filter extends Hookdeck.FilterRule {
        type: "filter";
    }

    interface Transform extends Hookdeck.TransformRule {
        type: "transform";
    }

    interface Delay extends Hookdeck.DelayRule {
        type: "delay";
    }
}
