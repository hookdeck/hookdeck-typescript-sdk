const Verify = ({signature, additionalSignature, rawBody, signingSecret}: {signature: string, hashCheck: string, rawBody: string, signingSecret: string}) => {
  const hash = crypto
    .createHmac("sha256", signingSecret)
    .update(req.rawBody)
    .digest("base64");

  // Compare the created hash with the value of the x-hookdeck-signature and x-hookdeck-signature-2 headers
  if (hash === signature || hash === additionalSignature) {
    console.log("Webhook is originating from Hookdeck");
    res.sendStatus(200);
  } else {
    console.log("Signature is invalid, rejected");
    res.sendStatus(403);
  }
}

export { Verify };