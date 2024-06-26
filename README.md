# Hookdeck TypeScript SDK

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/)
[![npm shield](https://img.shields.io/npm/v/@hookdeck/sdk)](https://www.npmjs.com/package/@hookdeck/sdk)

The Hookdeck TypeScript SDK provides convenient access to the Hookdeck API from JavaScript/TypeScript with the Node.js or Deno runtime.

## Documentation

- [Hookdeck API reference](https://hookdeck.com/docs/api)
- [SDK Reference](./reference.md)

## Installation

```bash
npm install --save @hookdeck/sdk
```

```bash
yarn add @hookdeck/sdk
```

```bash
deno add @hookdeck/sdk
```

## Usage

```typescript
import { HookdeckClient, Hookdeck } from '@hookdeck/sdk';

const hookdeck = new HookdeckClient({
  token: "YOUR_TOKEN_GOES_HERE"
});

const connection = await hookdeck.connection.upsert({
  name: "inbound-example",
  source: {
    name: "inbound"
  },
  destination: {
    name: "outbound",
    url: "https://mock.hookdeck.com"
  }
});

console.log("Created or updated Connection. Source URL:", connection.source.url);
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply 
import them under the `Hookdeck` namespace: 

```ts
import { Hookdeck } from "@hookdeck/sdk"; 

const connection: Hookdeck.Connection = {
  "id": "web_mNP60lEYInVfnH1EUWbhfUYL",
  "teamId": "tm_nlcetVe8k1lMAY0KR0OxNuHr",
}
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), 
a subclass of [HookdeckError](./src/errors/HookdeckError.ts) will be thrown:

```ts
import { HookdeckError } from '@hookdeck/sdk';

try {
  await hookdeck.connection.create(...);
} catch (err) {
  if (err instanceof HookdeckError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be
retried as long as the request is deemed retriable and the number of retry attempts has not grown larger
than the configured retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)
  
Use the `maxRetries` request option to configure this behavior. 

```ts
const response = await hookdeck.connection.create(..., {
  maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to 
configure this behavior. 

```ts
const response = await hookdeck.connection.create(..., {
  timeoutInSeconds: 30 // override timeout to 30s
});
```

### Customizing Fetch client

The SDK allows you to customize the underlying HTTP client / Fetch function. If you're 
running in an unsupported environment, this provides a way for you to break the glass and 
ensure the SDK works. 

```ts
import { HookdeckClient } from '@hookdeck/sdk';

const hookdeck = new HookdeckClient({
  token: "...",
  fetcher: // provide your implementation here
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. 
Therefore, we recommend pinning the package version to a specific version in your package.json file. 
This way, you can install the same version each time without breaking changes unless you are 
intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. 
Additions made directly to this library would have to be moved over to our generation code, 
otherwise they would be overwritten upon the next generated release. Feel free to open a 
PR as a proof of concept, but know that we will not be able to merge it as-is. 

We suggest [opening an issue](https://github.com/hookdeck/hookdeck-typescript-sdk/issues) first to discuss with us!
