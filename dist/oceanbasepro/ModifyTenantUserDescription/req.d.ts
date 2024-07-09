export interface ModifyTenantUserDescriptionRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4pnum****`
     */
    "TenantId": string;
    /**
     * 数据库账号名称。
     * 不能使用某些预留关键字，如 SYS、root 等。
     * @example `pay_test`
     */
    "UserName": string;
    /**
     * 数据库描述信息。
     * @example `this is a test database`
     */
    "Description": string;
}
