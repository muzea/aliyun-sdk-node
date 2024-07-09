export interface DeleteDatabasesRequest {
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 数据库名称列表。
     * 其为 JSON 格式的数组，数组中每个对象都为数据库名称的字符串。
     * @example `["sms_pre", "pay_pre"]`
     */
    "DatabaseNames": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId"?: string;
}
