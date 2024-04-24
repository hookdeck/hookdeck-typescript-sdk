import { Verify } from "../../src/webhooks/helpers";

const VALID_SIGNING_SECRET = "5fthvdmj8gtkzdv93mwkdpbupgwgfu4fu8xf4rro2oufn6qlhc";
const VALID_SIGNATURE = "kKb0yljhY9tBo7oihOMTvRayKCUpCNVujkoTMNoGdGM=";
const VALID_RAW_BODY = `{"topic":"event.successful","event_id":"evt_p3fPz1g8oeitqns4Xu","event_data":{"body":{"key1":"value1","key2":"value2"},"headers":{"content-length":"34","content-type":"application/json","user-agent":"curl/7.87.0","x-hookdeck-original-ip":"2a00:23ee:1d10:70af:c965:2312:1c5e:c01e"},"parsed_query":{},"path":"/","query":"","is_large_payload":false},"attempt_id":"atm_7DMgm6hMPfd36iVAzthO","attempt_response":{"message":"The Mock API returns the request data with a HTTP 200 code","next_step":"Convinced? Update your destination with your own server HTTP URL.","requested_path":"/","received_data":{"method":"POST","headers":{"host":"mock.hookdeck.com","accept":"application/json, text/plain, */*","content-type":"application/json","idempotency-key":"evt_p3fPz1g8oeitqns4Xu","user-agent":"curl/7.87.0","x-hookdeck-original-ip":"2a00:23ee:1d10:70af:c965:2312:1c5e:c01e","x-hookdeck-eventid":"evt_p3fPz1g8oeitqns4Xu","x-hookdeck-attempt-count":"1","x-hookdeck-ttl":"5","x-hookdeck-event-url":"https://dashboard.hookdeck.com/events/evt_p3fPz1g8oeitqns4Xu","x-hookdeck-source-name":"inbound","x-hookdeck-connection-name":"rate-limit-example","x-hookdeck-destination-name":"outbound","x-hookdeck-verified":"false","x-hookdeck-signature":"kKb0yljhY9tBo7oihOMTvRayKCUpCNVujkoTMNoGdGM=","content-length":"34","accept-encoding":"gzip, compress, deflate, br","sentry-trace":"e685f7b18f684e099f2a3beb3d055dc7-aa5dfbb279695091","baggage":"sentry-environment=production,sentry-public_key=518d4657d2fa43fba5a6b1adf5641e27,sentry-trace_id=e685f7b18f684e099f2a3beb3d055dc7","x-cloud-trace-context":"2be802dbf41fbd8adf974172d1b2e17d/18030915953010417425","via":"1.1 google","x-forwarded-for":"34.138.56.192, 34.36.135.20","x-forwarded-proto":"https","connection":"Keep-Alive"},"body":{"key1":"value1","key2":"value2"},"query":{}}},"connection":{"id":"web_qrRBwAL5hDJF","name":"rate-limit-example","full_name":"inbound -> rate-limit-example","source":{"id":"src_IzHOdKAHBk41","name":"inbound"},"destination":{"id":"des_zSBohU8Aa5QG","name":"outbound"}}};`;

describe("Hookdeck webhook verification", () => {
    it("should pass with a valid signature, body, and secret", async () => {
        const result = Verify({
            signature: VALID_SIGNATURE,
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect((await result).isValidSignature).toBe(true);
    });

    it("should fail with invalid additional signature", async () => {
        const result = Verify({
            signature: VALID_SIGNATURE,
            additionalSignature: "this-should-fail",
            rawBody: VALID_RAW_BODY,
            signingSecret: VALID_SIGNING_SECRET,
        });
        expect((await result).isValidSignature).toBe(false);
    });
});
