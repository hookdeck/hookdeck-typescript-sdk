const { subtle } = require("node:crypto").webcrypto;

type HookdeckVerifyArguments = {
    signature: string;
    additionalSignature?: string;
    rawBody: string;
    signingSecret: string;
};

type HookdeckVerificationResult = {
    isValidSignature: boolean;
};

const ALGORITHM = { name: "HMAC", hash: "SHA-256" };

async function sign({ key, data }: { key: string; data: string }) {
    const ec = new TextEncoder();
    const signature = await subtle.sign(ALGORITHM, key, ec.encode(data));
    return signature;
}

async function verify({ key, signature, data }: { key: string; signature: string; data: string }) {
    console.log({ key, signature });
    const ec = new TextEncoder();
    const verified = await subtle.verify(ALGORITHM, key, signature, ec.encode(data));
    return verified;
}

const Verify = async ({
    signature,
    additionalSignature,
    rawBody,
    signingSecret,
}: HookdeckVerifyArguments): Promise<HookdeckVerificationResult> => {
    const enc = new TextEncoder();

    const key = await subtle.importKey("raw", enc.encode(signingSecret), ALGORITHM, false, ["sign", "verify"]);

    const signatureCheck = await sign({ key, data: rawBody });
    const verified = await verify({ key, signature: signatureCheck, data: rawBody });
    let additionalVerified = true;
    if (additionalSignature !== undefined) {
        const additionalSignatureCheck = await sign({ key, data: rawBody });
        additionalVerified = await verify({ key, signature: additionalSignatureCheck, data: rawBody });
    }

    console.log({ signatureCheck, signature, additionalSignature, verified });

    return {
        isValidSignature: verified && additionalVerified,
    };
};

export { Verify };
