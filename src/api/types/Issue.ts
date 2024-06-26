/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

/**
 * Issue
 */
export type Issue = Hookdeck.Issue.Delivery | Hookdeck.Issue.Transformation;

export declare namespace Issue {
    interface Delivery extends Hookdeck.DeliveryIssue {
        type: "delivery";
    }

    interface Transformation extends Hookdeck.TransformationIssue {
        type: "transformation";
    }
}
