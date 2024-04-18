## IssueTrigger

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">list</a>({ ...params }) -> Hookdeck.IssueTriggerPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.IssueTriggerListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">create</a>({ ...params }) -> Hookdeck.IssueTrigger</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.create({
    type: Hookdeck.IssueType.Delivery,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.IssueTriggerCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">upsert</a>({ ...params }) -> Hookdeck.IssueTrigger</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.upsert({
    type: Hookdeck.IssueType.Delivery,
    name: "name",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.IssueTriggerUpsertRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">retrieve</a>(id) -> Hookdeck.IssueTrigger</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">update</a>(id, { ...params }) -> Hookdeck.IssueTrigger</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.update("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.IssueTriggerUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">delete</a>(id) -> Hookdeck.DeletedIssueTriggerResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.delete("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">disable</a>(id) -> Hookdeck.IssueTrigger</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.disable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">enable</a>(id) -> Hookdeck.IssueTrigger</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issueTrigger.enable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IssueTrigger.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Attempt

<details><summary> <code>hookdeck.attempt.<a href="./src/api/resources/attempt/client/Client.ts">list</a>({ ...params }) -> Hookdeck.EventAttemptPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.attempt.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.AttemptListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Attempt.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.attempt.<a href="./src/api/resources/attempt/client/Client.ts">retrieve</a>(id) -> Hookdeck.EventAttempt | undefined</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.attempt.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Attempt.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Bookmark

<details><summary> <code>hookdeck.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">list</a>({ ...params }) -> Hookdeck.BookmarkPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.bookmark.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.BookmarkListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Bookmark.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">create</a>({ ...params }) -> Hookdeck.Bookmark</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.bookmark.create({
    eventDataId: "event_data_id",
    webhookId: "webhook_id",
    label: "label",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.BookmarkCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Bookmark.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">retrieve</a>(id) -> Hookdeck.Bookmark</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.bookmark.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Bookmark.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">update</a>(id, { ...params }) -> Hookdeck.Bookmark</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.bookmark.update("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.BookmarkUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Bookmark.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">delete</a>(id) -> Hookdeck.DeletedBookmarkResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.bookmark.delete("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Bookmark.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">retrieveBody</a>(id) -> Hookdeck.RawBody</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.bookmark.retrieveBody("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Bookmark.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">trigger</a>(id, { ...params }) -> Hookdeck.EventArray</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.bookmark.trigger("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.BookmarkTriggerRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Bookmark.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Destination

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">list</a>({ ...params }) -> Hookdeck.DestinationPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.DestinationListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">create</a>({ ...params }) -> Hookdeck.Destination</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.create({
    name: "name",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.DestinationCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">upsert</a>({ ...params }) -> Hookdeck.Destination</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.upsert({
    name: "name",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.DestinationUpsertRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">retrieve</a>(id) -> Hookdeck.Destination</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">update</a>(id, { ...params }) -> Hookdeck.Destination</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.update("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.DestinationUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">delete</a>(id) -> Hookdeck.DestinationDeleteResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.delete("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">disable</a>(id) -> Hookdeck.Destination</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.disable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.destination.<a href="./src/api/resources/destination/client/Client.ts">enable</a>(id) -> Hookdeck.Destination</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.destination.enable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Destination.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## EventBulkRetry

<details><summary> <code>hookdeck.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">list</a>({ ...params }) -> Hookdeck.BatchOperationPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.eventBulkRetry.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.EventBulkRetryListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `EventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">create</a>({ ...params }) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.eventBulkRetry.create();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.EventBulkRetryCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `EventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">plan</a>() -> Hookdeck.EventBulkRetryPlanResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.eventBulkRetry.plan();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `EventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">retrieve</a>(id) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.eventBulkRetry.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `EventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">cancel</a>(id) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.eventBulkRetry.cancel("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `EventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Event

<details><summary> <code>hookdeck.event.<a href="./src/api/resources/event/client/Client.ts">list</a>({ ...params }) -> Hookdeck.EventPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.event.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.EventListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Event.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.event.<a href="./src/api/resources/event/client/Client.ts">retrieve</a>(id) -> Hookdeck.Event</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.event.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Event.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.event.<a href="./src/api/resources/event/client/Client.ts">retrieveBody</a>(id) -> Hookdeck.RawBody</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.event.retrieveBody("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Event.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.event.<a href="./src/api/resources/event/client/Client.ts">retry</a>(id) -> Hookdeck.RetriedEvent</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.event.retry("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Event.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.event.<a href="./src/api/resources/event/client/Client.ts">mute</a>(id) -> Hookdeck.Event</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.event.mute("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Event.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## IgnoredEventBulkRetry

<details><summary> <code>hookdeck.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">list</a>({ ...params }) -> Hookdeck.BatchOperationPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.ignoredEventBulkRetry.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.IgnoredEventBulkRetryListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IgnoredEventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">create</a>({ ...params }) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.ignoredEventBulkRetry.create();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.IgnoredEventBulkRetryCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IgnoredEventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">plan</a>() -> Hookdeck.IgnoredEventBulkRetryPlanResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.ignoredEventBulkRetry.plan();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `IgnoredEventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">retrieve</a>(id) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.ignoredEventBulkRetry.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IgnoredEventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">cancel</a>(id) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.ignoredEventBulkRetry.cancel("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `IgnoredEventBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Issue

<details><summary> <code>hookdeck.issue.<a href="./src/api/resources/issue/client/Client.ts">list</a>({ ...params }) -> Hookdeck.IssueWithDataPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issue.list({
    id: "iss_YXKv5OdJXCiVwkPhGy",
    issueTriggerId: "it_BXKv5OdJXCiVwkPhGy",
    mergedWith: "iss_AXKv3OdJXCiKlkPhDz",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.IssueListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Issue.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issue.<a href="./src/api/resources/issue/client/Client.ts">count</a>({ ...params }) -> Hookdeck.IssueCount</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issue.count({
    id: "iss_YXKv5OdJXCiVwkPhGy",
    issueTriggerId: "it_BXKv5OdJXCiVwkPhGy",
    mergedWith: "iss_AXKv3OdJXCiKlkPhDz",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.IssueCountRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Issue.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issue.<a href="./src/api/resources/issue/client/Client.ts">retrieve</a>(id) -> Hookdeck.IssueWithData</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issue.retrieve("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Issue.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issue.<a href="./src/api/resources/issue/client/Client.ts">update</a>(id, { ...params }) -> Hookdeck.Issue</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issue.update("string", {
    status: Hookdeck.IssueUpdateRequestStatus.Opened,
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.IssueUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Issue.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.issue.<a href="./src/api/resources/issue/client/Client.ts">dismiss</a>(id) -> Hookdeck.Issue</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.issue.dismiss("string");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Issue.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Request

<details><summary> <code>hookdeck.request.<a href="./src/api/resources/request/client/Client.ts">list</a>({ ...params }) -> Hookdeck.RequestPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.request.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.RequestListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Request.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.request.<a href="./src/api/resources/request/client/Client.ts">retrieve</a>(id) -> Hookdeck.Request</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.request.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Request.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.request.<a href="./src/api/resources/request/client/Client.ts">retrieveBody</a>(id) -> Hookdeck.RawBody</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.request.retrieveBody("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Request.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.request.<a href="./src/api/resources/request/client/Client.ts">retry</a>(id, { ...params }) -> Hookdeck.RetryRequest</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.request.retry("id", {
    webhookIds: ["webhook_ids"],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.RequestRetryRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Request.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.request.<a href="./src/api/resources/request/client/Client.ts">listEvent</a>(id, { ...params }) -> Hookdeck.EventPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.request.listEvent("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.RequestListEventRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Request.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.request.<a href="./src/api/resources/request/client/Client.ts">listIgnoredEvent</a>(id, { ...params }) -> Hookdeck.IgnoredEventPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.request.listIgnoredEvent("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.RequestListIgnoredEventRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Request.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## RequestBulkRetry

<details><summary> <code>hookdeck.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">list</a>({ ...params }) -> Hookdeck.BatchOperationPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.requestBulkRetry.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.RequestBulkRetryListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `RequestBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">create</a>({ ...params }) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.requestBulkRetry.create();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.RequestBulkRetryCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `RequestBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">plan</a>() -> Hookdeck.RequestBulkRetryPlanResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.requestBulkRetry.plan();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `RequestBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">retrieve</a>(id) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.requestBulkRetry.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `RequestBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">cancel</a>(id) -> Hookdeck.BatchOperation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.requestBulkRetry.cancel("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `RequestBulkRetry.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Source

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">list</a>({ ...params }) -> Hookdeck.SourcePaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.SourceListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">create</a>({ ...params }) -> Hookdeck.Source</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.create({
    name: "name",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.SourceCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">upsert</a>({ ...params }) -> Hookdeck.Source</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.upsert({
    name: "name",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.SourceUpsertRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">retrieve</a>(id, { ...params }) -> Hookdeck.Source</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.SourceRetrieveRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">update</a>(id, { ...params }) -> Hookdeck.Source</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.update("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.SourceUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">delete</a>(id) -> Hookdeck.SourceDeleteResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.delete("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">disable</a>(id) -> Hookdeck.Source</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.disable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.source.<a href="./src/api/resources/source/client/Client.ts">enable</a>(id) -> Hookdeck.Source</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.source.enable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Source.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Notification

<details><summary> <code>hookdeck.notification.<a href="./src/api/resources/notification/client/Client.ts">update</a>({ ...params }) -> Hookdeck.ToggleWebhookNotifications</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.notification.update();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.NotificationUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Notification.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## CustomDomain

<details><summary> <code>hookdeck.customDomain.<a href="./src/api/resources/customDomain/client/Client.ts">list</a>() -> Hookdeck.ListCustomDomainSchema</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.customDomain.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `CustomDomain.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.customDomain.<a href="./src/api/resources/customDomain/client/Client.ts">create</a>({ ...params }) -> Hookdeck.AddCustomHostname</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.customDomain.create({
    hostname: "hostname",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.AddCustomHostname`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `CustomDomain.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.customDomain.<a href="./src/api/resources/customDomain/client/Client.ts">delete</a>(domainId) -> Hookdeck.DeleteCustomDomainSchema</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.customDomain.delete("domain_id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**domainId: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `CustomDomain.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Transformation

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">list</a>({ ...params }) -> Hookdeck.TransformationPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.TransformationListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">create</a>({ ...params }) -> Hookdeck.Transformation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.create({
    name: "name",
    code: "code",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.TransformationCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">upsert</a>({ ...params }) -> Hookdeck.Transformation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.upsert({
    name: "name",
    code: "code",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.TransformationUpsertRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">retrieve</a>(id) -> Hookdeck.Transformation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">update</a>(id, { ...params }) -> Hookdeck.Transformation</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.update("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.TransformationUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">run</a>({ ...params }) -> Hookdeck.TransformationExecutorOutput</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.run();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.TransformationRunRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">listExecution</a>(id, { ...params }) -> Hookdeck.TransformationExecutionPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.listExecution("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.TransformationListExecutionRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.transformation.<a href="./src/api/resources/transformation/client/Client.ts">retrieveExecution</a>(id, executionId) -> Hookdeck.TransformationExecution</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.transformation.retrieveExecution("id", "execution_id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**executionId: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Transformation.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Connection

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">list</a>({ ...params }) -> Hookdeck.ConnectionPaginatedResult</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.ConnectionListRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">create</a>({ ...params }) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.create();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.ConnectionCreateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">upsert</a>({ ...params }) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.upsert();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.ConnectionUpsertRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">count</a>({ ...params }) -> Hookdeck.ConnectionCountResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.count();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `Hookdeck.ConnectionCountRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">retrieve</a>(id) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.retrieve("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">update</a>(id, { ...params }) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.update("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**request: `Hookdeck.ConnectionUpdateRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">delete</a>(id) -> Hookdeck.ConnectionDeleteResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.delete("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">disable</a>(id) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.disable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">enable</a>(id) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.enable("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">pause</a>(id) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.pause("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>hookdeck.connection.<a href="./src/api/resources/connection/client/Client.ts">unpause</a>(id) -> Hookdeck.Connection</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await hookdeck.connection.unpause("id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**id: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Connection.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
