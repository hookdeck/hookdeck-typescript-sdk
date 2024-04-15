/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Error code of the delivery attempt
 */
export type AttemptErrorCodes =
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

export const AttemptErrorCodes = {
    Cancelled: "CANCELLED",
    Timeout: "TIMEOUT",
    NotFound: "NOT_FOUND",
    ConnectionRefused: "CONNECTION_REFUSED",
    ConnectionReset: "CONNECTION_RESET",
    MissingUrl: "MISSING_URL",
    Cli: "CLI",
    CliUnavailable: "CLI_UNAVAILABLE",
    SelfSignedCert: "SELF_SIGNED_CERT",
    ErrTlsCertAltnameInvalid: "ERR_TLS_CERT_ALTNAME_INVALID",
    ErrSslWrongVersionNumber: "ERR_SSL_WRONG_VERSION_NUMBER",
    SslErrorCaUnknown: "SSL_ERROR_CA_UNKNOWN",
    TtlExpired: "TTL_EXPIRED",
    DataArchived: "DATA_ARCHIVED",
    SslCertExpired: "SSL_CERT_EXPIRED",
    BulkRetryCancelled: "BULK_RETRY_CANCELLED",
    DnsLookupFailed: "DNS_LOOKUP_FAILED",
    HostUnreachable: "HOST_UNREACHABLE",
    ProtocolError: "PROTOCOL_ERROR",
    SocketClosed: "SOCKET_CLOSED",
    Oauth2HandshakeFailed: "OAUTH2_HANDSHAKE_FAILED",
    Unknown: "UNKNOWN",
} as const;