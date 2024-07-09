export interface UpdateOrganizationalUnitDescriptionRequest {
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
     * 组织描述，长度最大限制256字符。
     * @example `organizationalUnit_test`
     */
    "Description"?: string;
}
