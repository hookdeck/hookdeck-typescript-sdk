/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../..";

/**
 * @example
 *     {}
 */
export interface SourceListRequest {
    id?: string;
    name?: string;
    disabled?: boolean;
    disabledAt?: Date;
    orderBy?: Hookdeck.SourceListRequestOrderBy;
    dir?: Hookdeck.SourceListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}