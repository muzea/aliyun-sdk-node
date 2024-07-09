export interface DescribeOasSQLPlansRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4louaeei****`
     */
    "TenantId": string;
    /**
     * 查询 SQL 执行计划的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-04-12T04:38:38Z`
     */
    "StartTime": string;
    /**
     * 查询 SQL 执行计划的结束时间。
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
     * 支持的语言。取值：
     * - 中文：zh-CN
     * - 英文：en-US
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 是否为动态 SQL。
     * @example `false`
     */
    "DynamicSql"?: boolean;
    "PlanUnionHash"?: string;
    "ReturnBriefInfo"?: boolean;
}
