const { webcrypto } = require("node:crypto");
const { subtle } = webcrypto;

const ALGORITHM = { name: "HMAC", hash: "SHA-256" };

const createSHA256Signature = async ({ signingSecret, data }: { signingSecret: string; data: string }) => {
    const enc = new TextEncoder();

    let key = await subtle.importKey("raw", enc.encode(signingSecret), ALGORITHM, false, ["sign"]);
    let signatureBuffer = await subtle.sign(ALGORITHM.name, key, enc.encode(data));
    let signature = Buffer.from(signatureBuffer).toString("base64");

    return signature;
};

/**
 * Error thrown when there are problems with the parameters used to verify webhooks.
 */
export class HookdeckWebhookVerificationParameterError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, HookdeckWebhookVerificationParameterError.prototype);
    }
}

export const HOOKDECK_HEADERS = {
    SIGNATURE: "x-hookdeck-signature",
    SECONDARY_SIGNATURE: "x-hookdeck-signature-2",
    VERIFIED_FLAG: "x-hookdeck-verified",
};

export type HookdeckWebhookVerificationConfig = {
    checkSourceVerification?: boolean;
};

export type HookdeckWebhookVerificationArguments = {
    headers: { [key: string]: string };
    rawBody: string;
    signingSecret: string;
    config?: HookdeckWebhookVerificationConfig;
};

export type HookdeckWebhookVerificationResult = {
    isValidSignature: boolean;
};

/**
 * Verify the Hookdeck webhook signature.
 *
 * @example
 *     const headers = request.headers;
 *     const rawBody = await request.text();
 *     const result = await verifyWebhookSignature({
 *         headers,
 *         rawBody,
 *         signingSecret: process.env.HOOKDECK_SIGNING_SECRET,
 *     })
 *
 *     if(!result.isValidSignature) {
 *         // Reject the webhook payload
 *     }
 *     else {
 *         // Proceed with the webhook payload
 *     }
 *
 * @example
 *     const headers = request.headers;
 *     const rawBody = await request.text();
 *     const result = await verifyWebhookSignature({
 *         headers,
 *         rawBody,
 *         signingSecret: process.env.HOOKDECK_SIGNING_SECRET,
 *         config: {
 *             checkSourceVerification: true,
 *         }
 *     })
 *
 *     if(!result.isValidSignature) {
 *         // Reject the webhook payload
 *     }
 *     else {
 *         // Proceed with the webhook payload
 *     }
 */
export const verifyWebhookSignature = async ({
    headers,
    rawBody,
    signingSecret,
    config = {},
}: HookdeckWebhookVerificationArguments): Promise<HookdeckWebhookVerificationResult> => {
    const signature = headers[HOOKDECK_HEADERS.SIGNATURE];
    const secondarySignature = headers[HOOKDECK_HEADERS.SECONDARY_SIGNATURE];

    if (!signature) {
        throw new HookdeckWebhookVerificationParameterError(`The "${HOOKDECK_HEADERS.SIGNATURE}" header is missing.`);
    }

    if (config.checkSourceVerification && !headers[HOOKDECK_HEADERS.VERIFIED_FLAG]) {
        throw new HookdeckWebhookVerificationParameterError(
            `"checkSourceVerification" has been configured but the "${HOOKDECK_HEADERS.VERIFIED_FLAG}" header is missing.`
        );
    }

    if (
        config.checkSourceVerification &&
        ["true", "false"].includes(headers[HOOKDECK_HEADERS.VERIFIED_FLAG]) === false
    ) {
        throw new HookdeckWebhookVerificationParameterError(
            `The value of "${HOOKDECK_HEADERS.VERIFIED_FLAG}" must be either "true" or "false". Value passed is "${
                headers[HOOKDECK_HEADERS.VERIFIED_FLAG]
            }".`
        );
    }

    if (config.checkSourceVerification && headers[HOOKDECK_HEADERS.VERIFIED_FLAG] === "false") {
        return {
            isValidSignature: false,
        };
    }

    const signatureCheck = await createSHA256Signature({ signingSecret, data: rawBody });

    return {
        isValidSignature: signatureCheck === signature || signatureCheck === secondarySignature,
    };
};
