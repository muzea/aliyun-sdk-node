export interface ModifyDatabaseDescriptionRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 数据库名称。
     * 不能使用某些预留关键字，如 test、mysql。
     * @example `sms_pre`
     */
    "DatabaseName": string;
    /**
     * 数据库描述信息。
     * @example `this is a test database`
     */
    "Description": string;
}
