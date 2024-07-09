export interface UpdateOrganizationalUnitParentIdRequest {
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
     * 父组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "ParentId": string;
}
