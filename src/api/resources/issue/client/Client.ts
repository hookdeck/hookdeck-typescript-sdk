/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Hookdeck from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Issue {
    interface Options {
        environment?: core.Supplier<environments.HookdeckEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class Issue {
    constructor(protected readonly _options: Issue.Options) {}

    /**
     *
     *
     * @param {Hookdeck.IssueListRequest} request
     * @param {Issue.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.issue.list({
     *         id: "iss_YXKv5OdJXCiVwkPhGy",
     *         issueTriggerId: "it_BXKv5OdJXCiVwkPhGy",
     *         mergedWith: "iss_AXKv3OdJXCiKlkPhDz"
     *     })
     */
    public async list(
        request: Hookdeck.IssueListRequest = {},
        requestOptions?: Issue.RequestOptions
    ): Promise<Hookdeck.IssueWithDataPaginatedResult> {
        const {
            id,
            issueTriggerId,
            type: type_,
            status,
            mergedWith,
            createdAt,
            firstSeenAt,
            lastSeenAt,
            dismissedAt,
            orderBy,
            dir,
            limit,
            next,
            prev,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (id != null) {
            if (Array.isArray(id)) {
                _queryParams["id"] = id.map((item) => item);
            } else {
                _queryParams["id"] = id;
            }
        }

        if (issueTriggerId != null) {
            if (Array.isArray(issueTriggerId)) {
                _queryParams["issue_trigger_id"] = issueTriggerId.map((item) => item);
            } else {
                _queryParams["issue_trigger_id"] = issueTriggerId;
            }
        }

        if (type_ != null) {
            _queryParams["type"] = type_;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (mergedWith != null) {
            if (Array.isArray(mergedWith)) {
                _queryParams["merged_with"] = mergedWith.map((item) => item);
            } else {
                _queryParams["merged_with"] = mergedWith;
            }
        }

        if (createdAt != null) {
            _queryParams["created_at"] = createdAt.toISOString();
        }

        if (firstSeenAt != null) {
            _queryParams["first_seen_at"] = firstSeenAt.toISOString();
        }

        if (lastSeenAt != null) {
            _queryParams["last_seen_at"] = lastSeenAt.toISOString();
        }

        if (dismissedAt != null) {
            _queryParams["dismissed_at"] = dismissedAt.toISOString();
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (dir != null) {
            _queryParams["dir"] = dir;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (next != null) {
            _queryParams["next"] = next;
        }

        if (prev != null) {
            _queryParams["prev"] = prev;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "issues"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.IssueWithDataPaginatedResult.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {Hookdeck.IssueCountRequest} request
     * @param {Issue.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.issue.count({
     *         id: "iss_YXKv5OdJXCiVwkPhGy",
     *         issueTriggerId: "it_BXKv5OdJXCiVwkPhGy",
     *         mergedWith: "iss_AXKv3OdJXCiKlkPhDz"
     *     })
     */
    public async count(
        request: Hookdeck.IssueCountRequest = {},
        requestOptions?: Issue.RequestOptions
    ): Promise<Hookdeck.IssueCount> {
        const {
            id,
            issueTriggerId,
            type: type_,
            status,
            mergedWith,
            createdAt,
            firstSeenAt,
            lastSeenAt,
            dismissedAt,
            orderBy,
            dir,
            limit,
            next,
            prev,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (id != null) {
            if (Array.isArray(id)) {
                _queryParams["id"] = id.map((item) => item);
            } else {
                _queryParams["id"] = id;
            }
        }

        if (issueTriggerId != null) {
            if (Array.isArray(issueTriggerId)) {
                _queryParams["issue_trigger_id"] = issueTriggerId.map((item) => item);
            } else {
                _queryParams["issue_trigger_id"] = issueTriggerId;
            }
        }

        if (type_ != null) {
            _queryParams["type"] = type_;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (mergedWith != null) {
            if (Array.isArray(mergedWith)) {
                _queryParams["merged_with"] = mergedWith.map((item) => item);
            } else {
                _queryParams["merged_with"] = mergedWith;
            }
        }

        if (createdAt != null) {
            _queryParams["created_at"] = createdAt.toISOString();
        }

        if (firstSeenAt != null) {
            _queryParams["first_seen_at"] = firstSeenAt.toISOString();
        }

        if (lastSeenAt != null) {
            _queryParams["last_seen_at"] = lastSeenAt.toISOString();
        }

        if (dismissedAt != null) {
            _queryParams["dismissed_at"] = dismissedAt.toISOString();
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (dir != null) {
            _queryParams["dir"] = dir;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (next != null) {
            _queryParams["next"] = next;
        }

        if (prev != null) {
            _queryParams["prev"] = prev;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                "issues/count"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.IssueCount.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {string} id
     * @param {Issue.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.issue.retrieve("string")
     */
    public async retrieve(id: string, requestOptions?: Issue.RequestOptions): Promise<Hookdeck.IssueWithData> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `issues/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.IssueWithData.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Hookdeck.NotFoundError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {string} id
     * @param {Hookdeck.IssueUpdateRequest} request
     * @param {Issue.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.BadRequestError}
     * @throws {@link Hookdeck.UnprocessableEntityError}
     *
     * @example
     *     await hookdeck.issue.update("string", {
     *         status: Hookdeck.IssueUpdateRequestStatus.Opened
     *     })
     */
    public async update(
        id: string,
        request: Hookdeck.IssueUpdateRequest,
        requestOptions?: Issue.RequestOptions
    ): Promise<Hookdeck.Issue> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `issues/${encodeURIComponent(id)}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.IssueUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Issue.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Hookdeck.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Hookdeck.UnprocessableEntityError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     *
     *
     * @param {string} id
     * @param {Issue.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Hookdeck.NotFoundError}
     *
     * @example
     *     await hookdeck.issue.dismiss("string")
     */
    public async dismiss(id: string, requestOptions?: Issue.RequestOptions): Promise<Hookdeck.Issue> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.HookdeckEnvironment.Default,
                `issues/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@hookdeck/sdk",
                "X-Fern-SDK-Version": "0.4.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Issue.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Hookdeck.NotFoundError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.HookdeckError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckTimeoutError();
            case "unknown":
                throw new errors.HookdeckError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
