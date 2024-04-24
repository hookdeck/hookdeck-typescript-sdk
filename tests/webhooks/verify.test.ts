import { verifyWebhookSignature } from "../../src/webhooks/helpers";

const VALID_SIGNING_SECRET = "5fthvdmj8gtkzdv93mwkdpbupgwgfu4fu8xf4rro2oufn6qlhc";
const VALID_SIGNATURE = "kKb0yljhY9tBo7oihOMTvRayKCUpCNVujkoTMNoGdGM=";
const VALID_RAW_BODY = `{"key1":"value1", "key2":"value2"}`;

describe("Hookdeck webhook verification", () => {
    it("should pass with a valid signature, body, and secret", async () => {
        const result = await verifyWebhookSignature({
            signature: VALID_SIGNATURE,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect(result.isValidSignature).toEqual(true);
    });

    it("should succeed with valid additional signature", async () => {
        const result = await verifyWebhookSignature({
            signature: "invalid-signature",
            secondarySignture: VALID_SIGNATURE,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect(result.isValidSignature).toEqual(true);
    });

    it("should fail with invalid signature", async () => {
        const result = await verifyWebhookSignature({
            signature: "invalid-signature",
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect(result.isValidSignature).toEqual(false);
    });

    it("should fail with an invalid secret", async () => {
        const result = await verifyWebhookSignature({
            signature: "invalid-secret",
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect(result.isValidSignature).toEqual(false);
    });
});
