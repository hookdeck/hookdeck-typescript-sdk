/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../../../../index";

/**
 * @example
 *     {}
 *
 * @example
 *     {
 *         id: "string",
 *         name: "string",
 *         disabled: true,
 *         disabledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         orderBy: Hookdeck.SourceListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.SourceListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         id: "string",
 *         name: "string",
 *         disabled: true,
 *         disabledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         orderBy: Hookdeck.SourceListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.SourceListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 *
 * @example
 *     {
 *         id: "string",
 *         name: "string",
 *         disabled: true,
 *         disabledAt: new Date("2024-01-15T09:30:00.000Z"),
 *         orderBy: Hookdeck.SourceListRequestOrderBy.CreatedAt,
 *         dir: Hookdeck.SourceListRequestDir.Asc,
 *         limit: 1,
 *         next: "string",
 *         prev: "string"
 *     }
 */
export interface SourceListRequest {
    id?: string | string[];
    name?: string;
    disabled?: boolean;
    disabledAt?: Date;
    orderBy?: Hookdeck.SourceListRequestOrderBy;
    dir?: Hookdeck.SourceListRequestDir;
    limit?: number;
    next?: string;
    prev?: string;
}
