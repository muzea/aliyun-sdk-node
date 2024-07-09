export interface ModifyDatabaseUserRolesRequest {
    /**
     * 数据库名称。
     * 不能使用某些预留关键字，如 test、mysql。
     * @example `sms_pre`
     */
    "DatabaseName": string;
    /**
     * 租户 ID。仅支持 OceanBase MySQL 模式。
     * @example `t4louaeei****`
     */
    "TenantId": string;
    /**
     * 用户名及具备的角色列表。
     * @example `[{"UserName":"oceanbase1","Role":"readwrite"},{"UserName":"oceanbase2","Role":"readonly"}]`
     */
    "Users": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId"?: string;
}
