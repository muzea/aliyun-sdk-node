export interface ListUsersForGroupRequest {
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
     * 组ID。
     * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "GroupId": string;
    /**
     * 账户ID列表，列表元素最大数量不超过100。
     * @example `[ou_001]`
     */
    "UserIds"?: string[];
}
