/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../..";

/**
 * @example
 *     {}
 */
export interface ConnectionUpdateRequest {
    name?: string;
    /** Description for the connection */
    description?: string;
    rules?: Hookdeck.Rule[];
}