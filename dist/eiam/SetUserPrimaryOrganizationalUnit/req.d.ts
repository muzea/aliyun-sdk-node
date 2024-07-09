export interface SetUserPrimaryOrganizationalUnitRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserId": string;
    /**
     * 主组织ID
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "OrganizationalUnitId": string;
}
