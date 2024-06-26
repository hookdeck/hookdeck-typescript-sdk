/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hookdeck from "../../../../api/index";
import * as core from "../../../../core";
import { AttemptErrorCodes } from "../../../types/AttemptErrorCodes";

export const EventBulkRetryCreateRequestQueryErrorCode: core.serialization.Schema<
    serializers.EventBulkRetryCreateRequestQueryErrorCode.Raw,
    Hookdeck.EventBulkRetryCreateRequestQueryErrorCode
> = core.serialization.undiscriminatedUnion([AttemptErrorCodes, core.serialization.list(AttemptErrorCodes)]);

export declare namespace EventBulkRetryCreateRequestQueryErrorCode {
    type Raw = AttemptErrorCodes.Raw | AttemptErrorCodes.Raw[];
}
