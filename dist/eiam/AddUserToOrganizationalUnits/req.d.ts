export interface AddUserToOrganizationalUnitsRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 账户ID
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserId": string;
    /**
     * 组织ID列表，列表元素数量不超过100。
     */
    "OrganizationalUnitIds": string[];
}
