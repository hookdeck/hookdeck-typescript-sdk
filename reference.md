
## IssueTrigger


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">list</a>({ ...params }) -> Intercom.IssueTriggerPaginatedResult</code> </summary>

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
await intercom.issueTrigger.list();
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


**request: `Intercom.IssueTriggerListRequest`** 


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


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">create</a>({ ...params }) -> Intercom.IssueTrigger</code> </summary>

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
await intercom.issueTrigger.create({
    type: Intercom.IssueType.Delivery
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


**request: `Intercom.IssueTriggerCreateRequest`** 


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


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">upsert</a>({ ...params }) -> Intercom.IssueTrigger</code> </summary>

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
await intercom.issueTrigger.upsert({
    type: Intercom.IssueType.Delivery,
    name: "name"
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


**request: `Intercom.IssueTriggerUpsertRequest`** 


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


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">retrieve</a>(id) -> Intercom.IssueTrigger</code> </summary>

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
await intercom.issueTrigger.retrieve("id");
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


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">update</a>(id, { ...params }) -> Intercom.IssueTrigger</code> </summary>

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
await intercom.issueTrigger.update("id");
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


**request: `Intercom.IssueTriggerUpdateRequest`** 


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


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">delete</a>(id) -> Intercom.DeletedIssueTriggerResponse</code> </summary>

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
await intercom.issueTrigger.delete("id");
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


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">disable</a>(id) -> Intercom.IssueTrigger</code> </summary>

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
await intercom.issueTrigger.disable("id");
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


<details><summary> <code>intercom.issueTrigger.<a href="./src/api/resources/issueTrigger/client/Client.ts">enable</a>(id) -> Intercom.IssueTrigger</code> </summary>

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
await intercom.issueTrigger.enable("id");
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


<details><summary> <code>intercom.attempt.<a href="./src/api/resources/attempt/client/Client.ts">list</a>({ ...params }) -> Intercom.EventAttemptPaginatedResult</code> </summary>

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
await intercom.attempt.list();
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


**request: `Intercom.AttemptListRequest`** 


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


<details><summary> <code>intercom.attempt.<a href="./src/api/resources/attempt/client/Client.ts">retrieve</a>(id) -> Intercom.EventAttempt | undefined</code> </summary>

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
await intercom.attempt.retrieve("id");
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


<details><summary> <code>intercom.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">list</a>({ ...params }) -> Intercom.BookmarkPaginatedResult</code> </summary>

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
await intercom.bookmark.list();
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


**request: `Intercom.BookmarkListRequest`** 


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


<details><summary> <code>intercom.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">create</a>({ ...params }) -> Intercom.Bookmark</code> </summary>

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
await intercom.bookmark.create({
    eventDataId: "event_data_id",
    webhookId: "webhook_id",
    label: "label"
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


**request: `Intercom.BookmarkCreateRequest`** 


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


<details><summary> <code>intercom.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">retrieve</a>(id) -> Intercom.Bookmark</code> </summary>

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
await intercom.bookmark.retrieve("id");
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


<details><summary> <code>intercom.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">update</a>(id, { ...params }) -> Intercom.Bookmark</code> </summary>

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
await intercom.bookmark.update("id");
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


**request: `Intercom.BookmarkUpdateRequest`** 


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


<details><summary> <code>intercom.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">delete</a>(id) -> Intercom.DeletedBookmarkResponse</code> </summary>

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
await intercom.bookmark.delete("id");
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


<details><summary> <code>intercom.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">retrieveBody</a>(id) -> Intercom.RawBody</code> </summary>

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
await intercom.bookmark.retrieveBody("id");
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


<details><summary> <code>intercom.bookmark.<a href="./src/api/resources/bookmark/client/Client.ts">trigger</a>(id, { ...params }) -> Intercom.EventArray</code> </summary>

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
await intercom.bookmark.trigger("id");
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


**request: `Intercom.BookmarkTriggerRequest`** 


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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">list</a>({ ...params }) -> Intercom.DestinationPaginatedResult</code> </summary>

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
await intercom.destination.list();
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


**request: `Intercom.DestinationListRequest`** 


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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">create</a>({ ...params }) -> Intercom.Destination</code> </summary>

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
await intercom.destination.create({
    name: "name"
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


**request: `Intercom.DestinationCreateRequest`** 


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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">upsert</a>({ ...params }) -> Intercom.Destination</code> </summary>

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
await intercom.destination.upsert({
    name: "name"
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


**request: `Intercom.DestinationUpsertRequest`** 


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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">retrieve</a>(id) -> Intercom.Destination</code> </summary>

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
await intercom.destination.retrieve("id");
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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">update</a>(id, { ...params }) -> Intercom.Destination</code> </summary>

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
await intercom.destination.update("id");
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


**request: `Intercom.DestinationUpdateRequest`** 


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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">delete</a>(id) -> Intercom.DestinationDeleteResponse</code> </summary>

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
await intercom.destination.delete("id");
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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">disable</a>(id) -> Intercom.Destination</code> </summary>

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
await intercom.destination.disable("id");
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


<details><summary> <code>intercom.destination.<a href="./src/api/resources/destination/client/Client.ts">enable</a>(id) -> Intercom.Destination</code> </summary>

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
await intercom.destination.enable("id");
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


<details><summary> <code>intercom.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">list</a>({ ...params }) -> Intercom.BatchOperationPaginatedResult</code> </summary>

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
await intercom.eventBulkRetry.list();
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


**request: `Intercom.EventBulkRetryListRequest`** 


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


<details><summary> <code>intercom.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">create</a>({ ...params }) -> Intercom.BatchOperation</code> </summary>

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
await intercom.eventBulkRetry.create();
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


**request: `Intercom.EventBulkRetryCreateRequest`** 


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


<details><summary> <code>intercom.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">plan</a>() -> Intercom.EventBulkRetryPlanResponse</code> </summary>

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
await intercom.eventBulkRetry.plan();
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


<details><summary> <code>intercom.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">retrieve</a>(id) -> Intercom.BatchOperation</code> </summary>

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
await intercom.eventBulkRetry.retrieve("id");
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


<details><summary> <code>intercom.eventBulkRetry.<a href="./src/api/resources/eventBulkRetry/client/Client.ts">cancel</a>(id) -> Intercom.BatchOperation</code> </summary>

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
await intercom.eventBulkRetry.cancel("id");
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


<details><summary> <code>intercom.event.<a href="./src/api/resources/event/client/Client.ts">list</a>({ ...params }) -> Intercom.EventPaginatedResult</code> </summary>

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
await intercom.event.list();
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


**request: `Intercom.EventListRequest`** 


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


<details><summary> <code>intercom.event.<a href="./src/api/resources/event/client/Client.ts">retrieve</a>(id) -> Intercom.Event</code> </summary>

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
await intercom.event.retrieve("id");
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


<details><summary> <code>intercom.event.<a href="./src/api/resources/event/client/Client.ts">retrieveBody</a>(id) -> Intercom.RawBody</code> </summary>

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
await intercom.event.retrieveBody("id");
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


<details><summary> <code>intercom.event.<a href="./src/api/resources/event/client/Client.ts">retry</a>(id) -> Intercom.RetriedEvent</code> </summary>

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
await intercom.event.retry("id");
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


<details><summary> <code>intercom.event.<a href="./src/api/resources/event/client/Client.ts">mute</a>(id) -> Intercom.Event</code> </summary>

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
await intercom.event.mute("id");
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


<details><summary> <code>intercom.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">list</a>({ ...params }) -> Intercom.BatchOperationPaginatedResult</code> </summary>

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
await intercom.ignoredEventBulkRetry.list();
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


**request: `Intercom.IgnoredEventBulkRetryListRequest`** 


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


<details><summary> <code>intercom.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">create</a>({ ...params }) -> Intercom.BatchOperation</code> </summary>

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
await intercom.ignoredEventBulkRetry.create();
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


**request: `Intercom.IgnoredEventBulkRetryCreateRequest`** 


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


<details><summary> <code>intercom.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">plan</a>() -> Intercom.IgnoredEventBulkRetryPlanResponse</code> </summary>

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
await intercom.ignoredEventBulkRetry.plan();
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


<details><summary> <code>intercom.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">retrieve</a>(id) -> Intercom.BatchOperation</code> </summary>

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
await intercom.ignoredEventBulkRetry.retrieve("id");
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


<details><summary> <code>intercom.ignoredEventBulkRetry.<a href="./src/api/resources/ignoredEventBulkRetry/client/Client.ts">cancel</a>(id) -> Intercom.BatchOperation</code> </summary>

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
await intercom.ignoredEventBulkRetry.cancel("id");
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


<details><summary> <code>intercom.issue.<a href="./src/api/resources/issue/client/Client.ts">list</a>({ ...params }) -> Intercom.IssueWithDataPaginatedResult</code> </summary>

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
await intercom.issue.list({
    id: "iss_YXKv5OdJXCiVwkPhGy",
    issueTriggerId: "it_BXKv5OdJXCiVwkPhGy",
    mergedWith: "iss_AXKv3OdJXCiKlkPhDz"
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


**request: `Intercom.IssueListRequest`** 


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


<details><summary> <code>intercom.issue.<a href="./src/api/resources/issue/client/Client.ts">count</a>({ ...params }) -> Intercom.IssueCount</code> </summary>

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
await intercom.issue.count({
    id: "iss_YXKv5OdJXCiVwkPhGy",
    issueTriggerId: "it_BXKv5OdJXCiVwkPhGy",
    mergedWith: "iss_AXKv3OdJXCiKlkPhDz"
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


**request: `Intercom.IssueCountRequest`** 


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


<details><summary> <code>intercom.request.<a href="./src/api/resources/request/client/Client.ts">list</a>({ ...params }) -> Intercom.RequestPaginatedResult</code> </summary>

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
await intercom.request.list();
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


**request: `Intercom.RequestListRequest`** 


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


<details><summary> <code>intercom.request.<a href="./src/api/resources/request/client/Client.ts">retrieve</a>(id) -> Intercom.Request</code> </summary>

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
await intercom.request.retrieve("id");
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


<details><summary> <code>intercom.request.<a href="./src/api/resources/request/client/Client.ts">retrieveBody</a>(id) -> Intercom.RawBody</code> </summary>

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
await intercom.request.retrieveBody("id");
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


<details><summary> <code>intercom.request.<a href="./src/api/resources/request/client/Client.ts">retry</a>(id, { ...params }) -> Intercom.RetryRequest</code> </summary>

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
await intercom.request.retry("id", {
    webhookIds: ["webhook_ids"]
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


**request: `Intercom.RequestRetryRequest`** 


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


<details><summary> <code>intercom.request.<a href="./src/api/resources/request/client/Client.ts">listEvent</a>(id, { ...params }) -> Intercom.EventPaginatedResult</code> </summary>

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
await intercom.request.listEvent("id");
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


**request: `Intercom.RequestListEventRequest`** 


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


<details><summary> <code>intercom.request.<a href="./src/api/resources/request/client/Client.ts">listIgnoredEvent</a>(id, { ...params }) -> Intercom.IgnoredEventPaginatedResult</code> </summary>

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
await intercom.request.listIgnoredEvent("id");
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


**request: `Intercom.RequestListIgnoredEventRequest`** 


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


<details><summary> <code>intercom.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">list</a>({ ...params }) -> Intercom.BatchOperationPaginatedResult</code> </summary>

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
await intercom.requestBulkRetry.list();
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


**request: `Intercom.RequestBulkRetryListRequest`** 


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


<details><summary> <code>intercom.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">create</a>({ ...params }) -> Intercom.BatchOperation</code> </summary>

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
await intercom.requestBulkRetry.create();
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


**request: `Intercom.RequestBulkRetryCreateRequest`** 


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


<details><summary> <code>intercom.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">plan</a>() -> Intercom.RequestBulkRetryPlanResponse</code> </summary>

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
await intercom.requestBulkRetry.plan();
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


<details><summary> <code>intercom.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">retrieve</a>(id) -> Intercom.BatchOperation</code> </summary>

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
await intercom.requestBulkRetry.retrieve("id");
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


<details><summary> <code>intercom.requestBulkRetry.<a href="./src/api/resources/requestBulkRetry/client/Client.ts">cancel</a>(id) -> Intercom.BatchOperation</code> </summary>

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
await intercom.requestBulkRetry.cancel("id");
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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">list</a>({ ...params }) -> Intercom.SourcePaginatedResult</code> </summary>

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
await intercom.source.list();
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


**request: `Intercom.SourceListRequest`** 


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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">create</a>({ ...params }) -> Intercom.Source</code> </summary>

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
await intercom.source.create({
    name: "name"
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


**request: `Intercom.SourceCreateRequest`** 


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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">upsert</a>({ ...params }) -> Intercom.Source</code> </summary>

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
await intercom.source.upsert({
    name: "name"
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


**request: `Intercom.SourceUpsertRequest`** 


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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">retrieve</a>(id, { ...params }) -> Intercom.Source</code> </summary>

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
await intercom.source.retrieve("id");
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


**request: `Intercom.SourceRetrieveRequest`** 


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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">update</a>(id, { ...params }) -> Intercom.Source</code> </summary>

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
await intercom.source.update("id");
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


**request: `Intercom.SourceUpdateRequest`** 


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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">delete</a>(id) -> Intercom.SourceDeleteResponse</code> </summary>

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
await intercom.source.delete("id");
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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">disable</a>(id) -> Intercom.Source</code> </summary>

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
await intercom.source.disable("id");
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


<details><summary> <code>intercom.source.<a href="./src/api/resources/source/client/Client.ts">enable</a>(id) -> Intercom.Source</code> </summary>

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
await intercom.source.enable("id");
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


<details><summary> <code>intercom.notification.<a href="./src/api/resources/notification/client/Client.ts">update</a>({ ...params }) -> Intercom.ToggleWebhookNotifications</code> </summary>

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
await intercom.notification.update();
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


**request: `Intercom.NotificationUpdateRequest`** 


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


<details><summary> <code>intercom.customDomain.<a href="./src/api/resources/customDomain/client/Client.ts">list</a>() -> Intercom.ListCustomDomainSchema</code> </summary>

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
await intercom.customDomain.list();
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


<details><summary> <code>intercom.customDomain.<a href="./src/api/resources/customDomain/client/Client.ts">create</a>({ ...params }) -> Intercom.AddCustomHostname</code> </summary>

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
await intercom.customDomain.create({
    hostname: "hostname"
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


**request: `Intercom.AddCustomHostname`** 


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


<details><summary> <code>intercom.customDomain.<a href="./src/api/resources/customDomain/client/Client.ts">delete</a>(domainId) -> Intercom.DeleteCustomDomainSchema</code> </summary>

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
await intercom.customDomain.delete("domain_id");
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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">list</a>({ ...params }) -> Intercom.TransformationPaginatedResult</code> </summary>

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
await intercom.transformation.list();
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


**request: `Intercom.TransformationListRequest`** 


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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">create</a>({ ...params }) -> Intercom.Transformation</code> </summary>

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
await intercom.transformation.create({
    name: "name",
    code: "code"
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


**request: `Intercom.TransformationCreateRequest`** 


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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">upsert</a>({ ...params }) -> Intercom.Transformation</code> </summary>

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
await intercom.transformation.upsert({
    name: "name",
    code: "code"
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


**request: `Intercom.TransformationUpsertRequest`** 


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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">retrieve</a>(id) -> Intercom.Transformation</code> </summary>

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
await intercom.transformation.retrieve("id");
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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">update</a>(id, { ...params }) -> Intercom.Transformation</code> </summary>

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
await intercom.transformation.update("id");
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


**request: `Intercom.TransformationUpdateRequest`** 


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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">run</a>({ ...params }) -> Intercom.TransformationExecutorOutput</code> </summary>

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
await intercom.transformation.run();
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


**request: `Intercom.TransformationRunRequest`** 


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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">listExecution</a>(id, { ...params }) -> Intercom.TransformationExecutionPaginatedResult</code> </summary>

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
await intercom.transformation.listExecution("id");
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


**request: `Intercom.TransformationListExecutionRequest`** 


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


<details><summary> <code>intercom.transformation.<a href="./src/api/resources/transformation/client/Client.ts">retrieveExecution</a>(id, executionId) -> Intercom.TransformationExecution</code> </summary>

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
await intercom.transformation.retrieveExecution("id", "execution_id");
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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">list</a>({ ...params }) -> Intercom.ConnectionPaginatedResult</code> </summary>

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
await intercom.connection.list();
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


**request: `Intercom.ConnectionListRequest`** 


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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">create</a>({ ...params }) -> Intercom.Connection</code> </summary>

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
await intercom.connection.create();
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


**request: `Intercom.ConnectionCreateRequest`** 


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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">upsert</a>({ ...params }) -> Intercom.Connection</code> </summary>

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
await intercom.connection.upsert();
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


**request: `Intercom.ConnectionUpsertRequest`** 


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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">count</a>({ ...params }) -> Intercom.ConnectionCountResponse</code> </summary>

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
await intercom.connection.count();
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


**request: `Intercom.ConnectionCountRequest`** 


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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">retrieve</a>(id) -> Intercom.Connection</code> </summary>

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
await intercom.connection.retrieve("id");
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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">update</a>(id, { ...params }) -> Intercom.Connection</code> </summary>

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
await intercom.connection.update("id");
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


**request: `Intercom.ConnectionUpdateRequest`** 


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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">delete</a>(id) -> Intercom.ConnectionDeleteResponse</code> </summary>

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
await intercom.connection.delete("id");
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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">disable</a>(id) -> Intercom.Connection</code> </summary>

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
await intercom.connection.disable("id");
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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">enable</a>(id) -> Intercom.Connection</code> </summary>

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
await intercom.connection.enable("id");
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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">pause</a>(id) -> Intercom.Connection</code> </summary>

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
await intercom.connection.pause("id");
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


<details><summary> <code>intercom.connection.<a href="./src/api/resources/connection/client/Client.ts">unpause</a>(id) -> Intercom.Connection</code> </summary>

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
await intercom.connection.unpause("id");
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


