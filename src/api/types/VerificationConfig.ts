/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Hookdeck from "../index";

/**
 * The verification configs for the specified verification type
 */
export type VerificationConfig =
    | Hookdeck.VerificationConfig.Hmac
    | Hookdeck.VerificationConfig.BasicAuth
    | Hookdeck.VerificationConfig.ApiKey
    | Hookdeck.VerificationConfig.Cloudsignal
    | Hookdeck.VerificationConfig.Courier
    | Hookdeck.VerificationConfig.Frontapp
    | Hookdeck.VerificationConfig.Twitter
    | Hookdeck.VerificationConfig.Stripe
    | Hookdeck.VerificationConfig.Recharge
    | Hookdeck.VerificationConfig.Twilio
    | Hookdeck.VerificationConfig.Github
    | Hookdeck.VerificationConfig.Shopify
    | Hookdeck.VerificationConfig.Postmark
    | Hookdeck.VerificationConfig.Typeform
    | Hookdeck.VerificationConfig.Xero
    | Hookdeck.VerificationConfig.Svix
    | Hookdeck.VerificationConfig.Zoom
    | Hookdeck.VerificationConfig.Akeneo
    | Hookdeck.VerificationConfig.Adyen
    | Hookdeck.VerificationConfig.Gitlab
    | Hookdeck.VerificationConfig.PropertyFinder
    | Hookdeck.VerificationConfig.Woocommerce
    | Hookdeck.VerificationConfig.Oura
    | Hookdeck.VerificationConfig.Commercelayer
    | Hookdeck.VerificationConfig.Hubspot
    | Hookdeck.VerificationConfig.Mailgun
    | Hookdeck.VerificationConfig.Persona
    | Hookdeck.VerificationConfig.Pipedrive
    | Hookdeck.VerificationConfig.Sendgrid
    | Hookdeck.VerificationConfig.Workos
    | Hookdeck.VerificationConfig.Synctera
    | Hookdeck.VerificationConfig.AwsSns
    | Hookdeck.VerificationConfig.ThreeDEye
    | Hookdeck.VerificationConfig.Twitch
    | Hookdeck.VerificationConfig.Enode
    | Hookdeck.VerificationConfig.Favro
    | Hookdeck.VerificationConfig.Linear
    | Hookdeck.VerificationConfig.Shopline
    | Hookdeck.VerificationConfig.Wix
    | Hookdeck.VerificationConfig.Nmi
    | Hookdeck.VerificationConfig.Orb
    | Hookdeck.VerificationConfig.Pylon
    | Hookdeck.VerificationConfig.Repay
    | Hookdeck.VerificationConfig.Square
    | Hookdeck.VerificationConfig.Solidgate
    | Hookdeck.VerificationConfig.Trello
    | Hookdeck.VerificationConfig.Sanity
    | Hookdeck.VerificationConfig.Ebay
    | Hookdeck.VerificationConfig.Telnyx
    | Hookdeck.VerificationConfig.Discord
    | Hookdeck.VerificationConfig.Tokenio
    | Hookdeck.VerificationConfig.Fiserv
    | Hookdeck.VerificationConfig.Bondsmith
    | Hookdeck.VerificationConfig.VercelLogDrains
    | Hookdeck.VerificationConfig.Vercel
    | Hookdeck.VerificationConfig.Tebex
    | Hookdeck.VerificationConfig.Slack
    | Hookdeck.VerificationConfig.Razorpay
    | Hookdeck.VerificationConfig.Mailchimp
    | Hookdeck.VerificationConfig.Paddle;

export declare namespace VerificationConfig {
    interface Hmac extends Hookdeck.VerificationHmac {
        type: "hmac";
    }

    interface BasicAuth extends Hookdeck.VerificationBasicAuth {
        type: "basic_auth";
    }

    interface ApiKey extends Hookdeck.VerificationApiKey {
        type: "api_key";
    }

    interface Cloudsignal extends Hookdeck.VerificationCloudSignal {
        type: "cloudsignal";
    }

    interface Courier extends Hookdeck.VerificationCourier {
        type: "courier";
    }

    interface Frontapp extends Hookdeck.VerificationFrontApp {
        type: "frontapp";
    }

    interface Twitter extends Hookdeck.VerificationTwitter {
        type: "twitter";
    }

    interface Stripe extends Hookdeck.VerificationStripe {
        type: "stripe";
    }

    interface Recharge extends Hookdeck.VerificationRecharge {
        type: "recharge";
    }

    interface Twilio extends Hookdeck.VerificationTwilio {
        type: "twilio";
    }

    interface Github extends Hookdeck.VerificationGitHub {
        type: "github";
    }

    interface Shopify extends Hookdeck.VerificationShopify {
        type: "shopify";
    }

    interface Postmark extends Hookdeck.VerificationPostmark {
        type: "postmark";
    }

    interface Typeform extends Hookdeck.VerificationTypeform {
        type: "typeform";
    }

    interface Xero extends Hookdeck.VerificationXero {
        type: "xero";
    }

    interface Svix extends Hookdeck.VerificationSvix {
        type: "svix";
    }

    interface Zoom extends Hookdeck.VerificationZoom {
        type: "zoom";
    }

    interface Akeneo extends Hookdeck.VerificationAkeneo {
        type: "akeneo";
    }

    interface Adyen extends Hookdeck.VerificationAdyen {
        type: "adyen";
    }

    interface Gitlab extends Hookdeck.VerificationGitLab {
        type: "gitlab";
    }

    interface PropertyFinder extends Hookdeck.VerificationPropertyFinder {
        type: "property-finder";
    }

    interface Woocommerce extends Hookdeck.VerificationWooCommerce {
        type: "woocommerce";
    }

    interface Oura extends Hookdeck.VerificationOura {
        type: "oura";
    }

    interface Commercelayer extends Hookdeck.VerificationCommercelayer {
        type: "commercelayer";
    }

    interface Hubspot extends Hookdeck.VerificationHubspot {
        type: "hubspot";
    }

    interface Mailgun extends Hookdeck.VerificationMailgun {
        type: "mailgun";
    }

    interface Persona extends Hookdeck.VerificationPersona {
        type: "persona";
    }

    interface Pipedrive extends Hookdeck.VerificationPipedrive {
        type: "pipedrive";
    }

    interface Sendgrid extends Hookdeck.VerificationSendGrid {
        type: "sendgrid";
    }

    interface Workos extends Hookdeck.VerificationWorkOs {
        type: "workos";
    }

    interface Synctera extends Hookdeck.VerificationSynctera {
        type: "synctera";
    }

    interface AwsSns extends Hookdeck.VerificationAwssns {
        type: "aws_sns";
    }

    interface ThreeDEye extends Hookdeck.Verification3DEye {
        type: "three_d_eye";
    }

    interface Twitch extends Hookdeck.VerificationTwitch {
        type: "twitch";
    }

    interface Enode extends Hookdeck.VerificationEnode {
        type: "enode";
    }

    interface Favro extends Hookdeck.VerificationFavro {
        type: "favro";
    }

    interface Linear extends Hookdeck.VerificationLinear {
        type: "linear";
    }

    interface Shopline extends Hookdeck.VerificationShopline {
        type: "shopline";
    }

    interface Wix extends Hookdeck.VerificationWix {
        type: "wix";
    }

    interface Nmi extends Hookdeck.VerificationNmiPaymentGateway {
        type: "nmi";
    }

    interface Orb extends Hookdeck.VerificationOrb {
        type: "orb";
    }

    interface Pylon extends Hookdeck.VerificationPylon {
        type: "pylon";
    }

    interface Repay extends Hookdeck.VerificationRepay {
        type: "repay";
    }

    interface Square extends Hookdeck.VerificationSquare {
        type: "square";
    }

    interface Solidgate extends Hookdeck.VerificationSolidGate {
        type: "solidgate";
    }

    interface Trello extends Hookdeck.VerificationTrello {
        type: "trello";
    }

    interface Sanity extends Hookdeck.VerificationSanity {
        type: "sanity";
    }

    interface Ebay extends Hookdeck.VerificationEbay {
        type: "ebay";
    }

    interface Telnyx extends Hookdeck.VerificationTelnyx {
        type: "telnyx";
    }

    interface Discord extends Hookdeck.VerificationDiscord {
        type: "discord";
    }

    interface Tokenio extends Hookdeck.VerificationTokenIo {
        type: "tokenio";
    }

    interface Fiserv extends Hookdeck.VerificationFiserv {
        type: "fiserv";
    }

    interface Bondsmith extends Hookdeck.VerificationBondsmith {
        type: "bondsmith";
    }

    interface VercelLogDrains extends Hookdeck.VerificationVercelLogDrains {
        type: "vercel_log_drains";
    }

    interface Vercel extends Hookdeck.VerificationVercel {
        type: "vercel";
    }

    interface Tebex extends Hookdeck.VerificationTebex {
        type: "tebex";
    }

    interface Slack extends Hookdeck.VerificationSlack {
        type: "slack";
    }

    interface Razorpay extends Hookdeck.VerificationRazorpay {
        type: "razorpay";
    }

    interface Mailchimp extends Hookdeck.VerificationMailchimp {
        type: "mailchimp";
    }

    interface Paddle extends Hookdeck.VerificationPaddle {
        type: "paddle";
    }
}
