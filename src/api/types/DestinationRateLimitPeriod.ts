/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Period to rate limit attempts
 */
export type DestinationRateLimitPeriod = "second" | "minute" | "hour" | "concurrent";

export const DestinationRateLimitPeriod = {
    Second: "second",
    Minute: "minute",
    Hour: "hour",
    Concurrent: "concurrent",
} as const;