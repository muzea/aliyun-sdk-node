export interface ListGroupsForUserRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 列表页码，默认1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 列表大小，默认20，最大不超过100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 账户ID。
     * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "UserId": string;
}
