export interface DescribeSQLSamplesRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId"?: string;
    /**
     * 租户 ID。
     * @example `t4louaeei****`
     */
    "TenantId"?: string;
    /**
     * 查看慢 SQL 执行的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-04-12T04:38:38Z`
     */
    "StartTime": string;
    /**
     * 查看慢 SQL 执行的结束时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-04-12T05:38:38Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `test_db`
     */
    "DbName": string;
    /**
     * SQL ID。
     * @example `8D6E84****0B8FB1823D199E2CA1****`
     */
    "SqlId": string;
    "ReturnSqlText"?: boolean;
}
