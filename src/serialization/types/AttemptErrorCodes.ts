/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const AttemptErrorCodes: core.serialization.Schema<
    serializers.AttemptErrorCodes.Raw,
    Hookdeck.AttemptErrorCodes
> = core.serialization.enum_([
    "CANCELLED",
    "TIMEOUT",
    "NOT_FOUND",
    "CONNECTION_REFUSED",
    "CONNECTION_RESET",
    "MISSING_URL",
    "CLI",
    "CLI_UNAVAILABLE",
    "SELF_SIGNED_CERT",
    "ERR_TLS_CERT_ALTNAME_INVALID",
    "ERR_SSL_WRONG_VERSION_NUMBER",
    "SSL_ERROR_CA_UNKNOWN",
    "TTL_EXPIRED",
    "DATA_ARCHIVED",
    "SSL_CERT_EXPIRED",
    "BULK_RETRY_CANCELLED",
    "DNS_LOOKUP_FAILED",
    "HOST_UNREACHABLE",
    "PROTOCOL_ERROR",
    "SOCKET_CLOSED",
    "OAUTH2_HANDSHAKE_FAILED",
    "UNKNOWN",
]);

export declare namespace AttemptErrorCodes {
    type Raw =
        | "CANCELLED"
        | "TIMEOUT"
        | "NOT_FOUND"
        | "CONNECTION_REFUSED"
        | "CONNECTION_RESET"
        | "MISSING_URL"
        | "CLI"
        | "CLI_UNAVAILABLE"
        | "SELF_SIGNED_CERT"
        | "ERR_TLS_CERT_ALTNAME_INVALID"
        | "ERR_SSL_WRONG_VERSION_NUMBER"
        | "SSL_ERROR_CA_UNKNOWN"
        | "TTL_EXPIRED"
        | "DATA_ARCHIVED"
        | "SSL_CERT_EXPIRED"
        | "BULK_RETRY_CANCELLED"
        | "DNS_LOOKUP_FAILED"
        | "HOST_UNREACHABLE"
        | "PROTOCOL_ERROR"
        | "SOCKET_CLOSED"
        | "OAUTH2_HANDSHAKE_FAILED"
        | "UNKNOWN";
}