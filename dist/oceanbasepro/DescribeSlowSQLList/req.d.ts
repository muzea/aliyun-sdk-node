export interface DescribeSlowSQLListRequest {
    /**
     * 租户 ID。
     * @example `t2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 查询慢 SQL 参数的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-06-13T15:40:43Z`
     */
    "StartTime": string;
    /**
     * 查询慢 SQL 参数的结束时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-09-13T15:40:43Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DbName"?: string;
    /**
     * 查询关键字。
     * @example `update`
     */
    "SearchKeyWord"?: string;
    /**
     * 查询参数。
     * @example `cputime`
     */
    "SearchParameter"?: string;
    /**
     * 查询规则。
     * @example `>`
     */
    "SearchRule"?: string;
    /**
     * 查询值。
     * @example `0.01`
     */
    "SearchValue"?: string;
    /**
     * SQLID，SQL 唯一标识。
     * @example `8D6E84****0B8FB1823D199E2CA1****`
     */
    "SQLId"?: string;
    /**
     * 数据库节点 IP。
     * @example `i-bp18qljorblo8es*****`
     */
    "NodeIp"?: string;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 过滤条件。
     * @example `[dbName:sys]`
     */
    "FilterCondition"?: any;
    /**
     * 排序列。
     * @example `cputime`
     */
    "SortColumn"?: string;
    /**
     * 排序规则。
     * @example `desc`
     */
    "SortOrder"?: string;
}
