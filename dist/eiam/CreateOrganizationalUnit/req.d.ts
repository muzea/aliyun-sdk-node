export interface CreateOrganizationalUnitRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 组织名称，最大长度限制64字符。
     * @example `test_ou_name`
     */
    "OrganizationalUnitName": string;
    /**
     * 父组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "ParentId": string;
    /**
     * 组织外部ID，用于与外部系统关联，默认为组织ID，最大长度限制64字符。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "OrganizationalUnitExternalId"?: string;
    /**
     * 描述信息，最大限制长度256字符。
     * @example `description`
     */
    "Description"?: string;
}
