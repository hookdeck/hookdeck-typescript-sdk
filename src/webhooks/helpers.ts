// const { webcrypto, createHmac } = require("node:crypto");
const { webcrypto } = require("node:crypto");
const { subtle } = webcrypto;

const ALGORITHM = { name: "HMAC", hash: "SHA-256" };

const createHS256Signature = async ({ signingSecret, data }: { signingSecret: string; data: string }) => {
    const enc = new TextEncoder();

    let key = await subtle.importKey("raw", enc.encode(signingSecret), ALGORITHM, false, ["sign"]);
    let signatureBuffer = await subtle.sign(ALGORITHM.name, key, enc.encode(data));
    let signature = Buffer.from(signatureBuffer).toString("base64");

    // Useful to check signature creation
    // const hash = createHmac("sha256", signingSecret).update(data).digest("base64");
    // console.log({ signature, hash });

    return signature;
};

export type HookdeckVerifyArguments = {
    signature: string;
    secondarySignature?: string;
    rawBody: string;
    signingSecret: string;
};

export type HookdeckVerificationResult = {
    isValidSignature: boolean;
};

/**
 * Verify the Hookdeck webhook signature.
 *
 * @example
 *     const result = await verifyWebhookSignature({
 *         signature: "kKb0yljhY9tBo7oihOMTvRayKCUpCNVujkoTMNoGdGM=",
 *         rawBody: `{"key1":"value1", "key2":"value2"}`,
 *         signingSecret: "5fthvdmj8gtkzdv93mwkdpbupgwgfu4fu8xf4rro2oufn6qlhc",
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
    signature,
    rawBody,
    signingSecret,
    secondarySignature,
}: HookdeckVerifyArguments): Promise<HookdeckVerificationResult> => {
    const signatureCheck = await createHS256Signature({ signingSecret, data: rawBody });

    return {
        isValidSignature: signatureCheck === signature || signatureCheck === secondarySignature,
    };
};
