export interface DescribeOasAnomalySQLListRequest {
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
     * 监控数据的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-04-12T04:38:38Z`
     */
    "StartTime": string;
    /**
     * 监控数据的结束时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2023-04-12T05:38:38Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `db_****`
     */
    "DbName"?: string;
    /**
     * 关键字查询。
     * @example `update`
     */
    "SearchKeyWord"?: string;
    /**
     * 参数查询。
     * @example `cputime`
     */
    "SearchParam"?: string;
    /**
     * 查询规则。
     * 该参数取值包括："="，">"， “>=”， “<”，“<="
     * @example `>`
     */
    "SearchRule"?: string;
    /**
     * 查询值。
     * @example `0.01`
     */
    "SearchValue"?: string;
    /**
     * SQL ID。
     * @example `8D6E84****0B8FB1823D199E2CA1****`
     */
    "SqlId"?: string;
    /**
     * 节点 IP。
     * @example `i-bp19y05uq6x*********`
     */
    "NodeIp"?: string;
    /**
     * 所有字段通过 @ 来引用。可选字段请参考[查询 SQL 的性能统计](https://www.oceanbase.com/docs/community-ocp-cn-10000000001832433)接口返回的所有列。
     * @example `@avgCpuTime > 20 and @executions > 100`
     */
    "FilterCondition"?: string;
    /**
     * 返回数据的语言。
     * 默认值：中国 CN，国外 EN。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 返回 SQL 文本的最大长度。
     * @example `65535`
     */
    "SqlTextLength"?: number;
    /**
     * 当前页。
     * @example `1`
     */
    "Current"?: number;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否动态 SQL。
     * > <br>表示传入的 SQL ID 是否为动态 SQL 的 ID。
     * @example `false`
     */
    "DynamicSql"?: boolean;
    /**
     * 返回结果时，是否合并动态 SQL。
     * > <br>表示输出结果时，是否聚合 in 查询的SQL 的结果。
     * @example `false`
     */
    "MergeDynamicSql"?: boolean;
}
