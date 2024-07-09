export interface QueryUsageStatisticsByTagIdRequest {
    /**
     * 查询开始时间。
     * @example `20230308`
     */
    "BeginTime"?: string;
    /**
     * 查询结束时间。
     * @example `20230406`
     */
    "EndTime"?: string;
    /**
     * 标签ID。
     * @example `89`
     */
    "TagId"?: number;
    /**
     * 当前页码，默认：1
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页面大小。
     * @example `10`
     */
    "PageSize"?: number;
}
