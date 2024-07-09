export interface DescribeSQLHistoryListRequest {
    /**
     * 租户 ID。
     * @example `t2mr3oae0****`
     */
    "TenantId": string;
    /**
     * 查看 SQL 执行历史参数的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-06-13T15:40:43Z`
     */
    "StartTime": string;
    /**
     * 查看 SQL 执行历史参数的结束时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-09-13T15:40:43Z`
     */
    "EndTime": string;
    /**
     * SQLID。
     * @example `8D6E84****0B8FB1823D199E2CA1****`
     */
    "SQLId": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数量。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
