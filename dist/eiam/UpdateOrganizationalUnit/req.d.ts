export interface UpdateOrganizationalUnitRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "OrganizationalUnitId": string;
    /**
     * 组织名称，最大长度限制64字符，且同一父组织下，组织名称不能相同。
     * @example `ou_name`
     */
    "OrganizationalUnitName"?: string;
}
