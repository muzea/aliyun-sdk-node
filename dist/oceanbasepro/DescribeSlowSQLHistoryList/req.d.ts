export interface DescribeSlowSQLHistoryListRequest {
    /**
     * 租户 ID。
     * @example `t384tolsj****`
     */
    "TenantId": string;
    /**
     * 查看慢 SQL 历史参数的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-12-14T02:34:49Z`
     */
    "StartTime": string;
    /**
     * 查看慢 SQL 历史参数的结束时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-12-14T08:34:49Z`
     */
    "EndTime": string;
    /**
     * SQLID，SQL 唯一标识。
     * @example `8D6E84735C0****1823D199E2CA1****`
     */
    "SQLId": string;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
