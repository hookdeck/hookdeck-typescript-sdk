/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {}
 */
export interface TransformationListExecutionRequest {
    logLevel?: Hookdeck.TransformationListExecutionRequestLogLevel;
    webhookId?: string | string[];
    issueId?: string | string[];
    createdAt?: Date;
    orderBy?: Hookdeck.TransformationListExecutionRequestOrderBy;
    dir?: Hookdeck.TransformationListExecutionRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
