import { HOOKDECK_HEADERS, verifyWebhookSignature } from "../../src/webhooks/helpers";

const VALID_SIGNING_SECRET = "5fthvdmj8gtkzdv93mwkdpbupgwgfu4fu8xf4rro2oufn6qlhc";
const VALID_SIGNATURE = "kKb0yljhY9tBo7oihOMTvRayKCUpCNVujkoTMNoGdGM=";
const VALID_RAW_BODY = `{"key1":"value1", "key2":"value2"}`;

describe("Hookdeck webhook verification", () => {
    it("should pass with a valid signature, body, and secret", async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = VALID_SIGNATURE;

        const result = await verifyWebhookSignature({
            headers,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect(result.isValidSignature).toEqual(true);
    });

    it("should succeed with valid additional signature", async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = "invalid-signature";
        headers[HOOKDECK_HEADERS.SECONDARY_SIGNATURE] = VALID_SIGNATURE;

        const result = await verifyWebhookSignature({
            headers,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect(result.isValidSignature).toEqual(true);
    });

    it("should fail with invalid signature", async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = "invalid-signature";

        const result = await verifyWebhookSignature({
            headers,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect(result.isValidSignature).toEqual(false);
    });

    it("should fail with an invalid secret", async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = "invalid-signature";

        const result = await verifyWebhookSignature({
            headers,
            rawBody: VALID_RAW_BODY,
            signingSecret: "invalid-secret",
        });
        expect(result.isValidSignature).toEqual(false);
    });

    it(`should throw an exception if ${HOOKDECK_HEADERS.SIGNATURE} is not in the headers`, async () => {
        const headers: { [key: string]: string } = {};

        const verify = async () => {
            const result = await verifyWebhookSignature({
                headers,
                rawBody: VALID_RAW_BODY,
                signingSecret: VALID_SIGNATURE,
            });
        };
        await expect(verify()).rejects.toThrowError(HOOKDECK_HEADERS.SIGNATURE);
    });

    it(`should fail source verification if checkSourceVerification config is set to "false"`, async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = VALID_SIGNATURE;
        headers[HOOKDECK_HEADERS.VERIFIED_FLAG] = "false";

        const result = await verifyWebhookSignature({
            headers,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
            config: {
                checkSourceVerification: true,
            },
        });
        expect(result.isValidSignature).toEqual(false);
    });

    it(`should pass source verification if checkSourceVerification config is set to "true"`, async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = VALID_SIGNATURE;
        headers[HOOKDECK_HEADERS.VERIFIED_FLAG] = "true";

        const result = await verifyWebhookSignature({
            headers,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
            config: {
                checkSourceVerification: true,
            },
        });
        expect(result.isValidSignature).toEqual(true);
    });

    it(`should throw an exception if "checkSourceVerification" config is set but the ${HOOKDECK_HEADERS.VERIFIED_FLAG} missing`, async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = VALID_SIGNATURE;

        const verify = async () => {
            const result = await verifyWebhookSignature({
                headers,
                rawBody: VALID_RAW_BODY,
                signingSecret: VALID_SIGNATURE,
                config: {
                    checkSourceVerification: true,
                },
            });
        };
        await expect(verify()).rejects.toThrowError(HOOKDECK_HEADERS.VERIFIED_FLAG);
    });

    it(`should throw an exception if ${HOOKDECK_HEADERS.VERIFIED_FLAG} does not have a value of "true" or "false"`, async () => {
        const headers: { [key: string]: string } = {};
        headers[HOOKDECK_HEADERS.SIGNATURE] = VALID_SIGNATURE;
        headers[HOOKDECK_HEADERS.VERIFIED_FLAG] = "non-true-or-false-value";

        const verify = async () => {
            const result = await verifyWebhookSignature({
                headers,
                rawBody: VALID_RAW_BODY,
                signingSecret: VALID_SIGNATURE,
                config: {
                    checkSourceVerification: true,
                },
            });
        };
        await expect(verify()).rejects.toThrowError(`"true" or "false"`);
    });
});
