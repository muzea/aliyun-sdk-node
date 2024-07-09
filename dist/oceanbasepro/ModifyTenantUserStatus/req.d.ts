export interface ModifyTenantUserStatusRequest {
    /**
     * 数据库账号名称。
     * 不能使用某些预留关键字，如 SYS、root 等。
     * @example `pay_test`
     */
    "UserName": string;
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 数据库账号的状态。
     * - LOCKED：锁定。
     * - ONLINE：解锁。
     * @example `LOCKED`
     */
    "UserStatus": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
}
