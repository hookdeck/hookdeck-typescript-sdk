/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Hookdeck from "../../api";
import * as core from "../../core";

export const IntegrationProvider: core.serialization.Schema<
    serializers.IntegrationProvider.Raw,
    Hookdeck.IntegrationProvider
> = core.serialization.enum_([
    "HMAC",
    "BASIC_AUTH",
    "API_KEY",
    "CLOUDSIGNAL",
    "COURIER",
    "FRONTAPP",
    "TWITTER",
    "STRIPE",
    "RECHARGE",
    "TWILIO",
    "GITHUB",
    "SHOPIFY",
    "POSTMARK",
    "TYPEFORM",
    "XERO",
    "SVIX",
    "ZOOM",
    "AKENEO",
    "ADYEN",
    "GITLAB",
    "PROPERTY-FINDER",
    "WOOCOMMERCE",
    "OURA",
    "COMMERCELAYER",
    "HUBSPOT",
    "MAILGUN",
    "PERSONA",
    "PIPEDRIVE",
    "SENDGRID",
    "WORKOS",
    "SYNCTERA",
    "AWS_SNS",
    "THREE_D_EYE",
    "TWITCH",
    "ENODE",
    "FAVRO",
    "LINEAR",
    "SHOPLINE",
    "WIX",
    "NMI",
    "ORB",
    "PYLON",
    "REPAY",
    "SQUARE",
    "SOLIDGATE",
    "TRELLO",
    "SANITY",
    "EBAY",
    "TOKENIO",
]);

export declare namespace IntegrationProvider {
    type Raw =
        | "HMAC"
        | "BASIC_AUTH"
        | "API_KEY"
        | "CLOUDSIGNAL"
        | "COURIER"
        | "FRONTAPP"
        | "TWITTER"
        | "STRIPE"
        | "RECHARGE"
        | "TWILIO"
        | "GITHUB"
        | "SHOPIFY"
        | "POSTMARK"
        | "TYPEFORM"
        | "XERO"
        | "SVIX"
        | "ZOOM"
        | "AKENEO"
        | "ADYEN"
        | "GITLAB"
        | "PROPERTY-FINDER"
        | "WOOCOMMERCE"
        | "OURA"
        | "COMMERCELAYER"
        | "HUBSPOT"
        | "MAILGUN"
        | "PERSONA"
        | "PIPEDRIVE"
        | "SENDGRID"
        | "WORKOS"
        | "SYNCTERA"
        | "AWS_SNS"
        | "THREE_D_EYE"
        | "TWITCH"
        | "ENODE"
        | "FAVRO"
        | "LINEAR"
        | "SHOPLINE"
        | "WIX"
        | "NMI"
        | "ORB"
        | "PYLON"
        | "REPAY"
        | "SQUARE"
        | "SOLIDGATE"
        | "TRELLO"
        | "SANITY"
        | "EBAY"
        | "TOKENIO";
}