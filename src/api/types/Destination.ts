/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "..";

/**
 * Associated [Destination](#destination-object) object
 */
export interface Destination {
    /** ID of the destination */
    id: string;
    /** A unique, human-friendly name for the destination */
    name: string;
    /** Description of the destination */
    description?: string;
    /** ID of the workspace */
    teamId: string;
    pathForwardingDisabled?: boolean;
    /** HTTP endpoint of the destination */
    url?: string;
    /** Path for the CLI destination */
    cliPath?: string;
    /** Limit event attempts to receive per period. Max value is workspace plan's max attempts thoughput. */
    rateLimit?: number;
    rateLimitPeriod?: Hookdeck.DestinationRateLimitPeriod;
    httpMethod?: Hookdeck.DestinationHttpMethod;
    authMethod?: Hookdeck.DestinationAuthMethodConfig;
    /** Date the destination was disabled */
    disabledAt?: Date;
    /** Date the destination was last updated */
    updatedAt: Date;
    /** Date the destination was created */
    createdAt: Date;
}