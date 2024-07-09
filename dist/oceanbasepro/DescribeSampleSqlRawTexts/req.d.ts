export interface DescribeSampleSqlRawTextsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId"?: string;
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId"?: string;
    /**
     * 起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-04-12T04:38:38Z`
     */
    "StartTime": string;
    /**
     * 结束时间。
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
    /**
     * 执行查询的 traceId， 对应 Slow SQL 明细中的 traceId。
     * >
     * > 并非所有 Slow SQL 的 traceId 都能查询到原始文本。
     * @example `YB420A700EFB-00060D53E42D0C61-0-0`
     */
    "TraceId"?: string;
    /**
     * 用于控制 SQL 返回行数。
     * @example `20`
     */
    "Limit"?: string;
}
