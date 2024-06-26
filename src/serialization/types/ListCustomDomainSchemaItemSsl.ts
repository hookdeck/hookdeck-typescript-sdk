/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Hookdeck from "../../api/index";
import * as core from "../../core";
import { ListCustomDomainSchemaItemSslValidationRecordsItem } from "./ListCustomDomainSchemaItemSslValidationRecordsItem";
import { ListCustomDomainSchemaItemSslDcvDelegationRecordsItem } from "./ListCustomDomainSchemaItemSslDcvDelegationRecordsItem";
import { ListCustomDomainSchemaItemSslSettings } from "./ListCustomDomainSchemaItemSslSettings";

export const ListCustomDomainSchemaItemSsl: core.serialization.ObjectSchema<
    serializers.ListCustomDomainSchemaItemSsl.Raw,
    Hookdeck.ListCustomDomainSchemaItemSsl
> = core.serialization.object({
    id: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    method: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
    txtName: core.serialization.property("txt_name", core.serialization.string().optional()),
    txtValue: core.serialization.property("txt_value", core.serialization.string().optional()),
    validationRecords: core.serialization.property(
        "validation_records",
        core.serialization.list(ListCustomDomainSchemaItemSslValidationRecordsItem).optional()
    ),
    dcvDelegationRecords: core.serialization.property(
        "dcv_delegation_records",
        core.serialization.list(ListCustomDomainSchemaItemSslDcvDelegationRecordsItem).optional()
    ),
    settings: ListCustomDomainSchemaItemSslSettings.optional(),
    bundleMethod: core.serialization.property("bundle_method", core.serialization.string().optional()),
    wildcard: core.serialization.boolean().optional(),
    certificateAuthority: core.serialization.property("certificate_authority", core.serialization.string().optional()),
});

export declare namespace ListCustomDomainSchemaItemSsl {
    interface Raw {
        id?: string | null;
        type?: string | null;
        method?: string | null;
        status?: string | null;
        txt_name?: string | null;
        txt_value?: string | null;
        validation_records?: ListCustomDomainSchemaItemSslValidationRecordsItem.Raw[] | null;
        dcv_delegation_records?: ListCustomDomainSchemaItemSslDcvDelegationRecordsItem.Raw[] | null;
        settings?: ListCustomDomainSchemaItemSslSettings.Raw | null;
        bundle_method?: string | null;
        wildcard?: boolean | null;
        certificate_authority?: string | null;
    }
}
