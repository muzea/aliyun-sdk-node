export interface AddUsersToGroupRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 组ID。
     * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "GroupId": string;
    /**
     * 账户ID列表，列表元素个数不超过100。
     * @example `[ou_001]`
     */
    "UserIds": string[];
}
