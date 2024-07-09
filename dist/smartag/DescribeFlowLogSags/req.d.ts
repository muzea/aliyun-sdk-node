export interface DescribeFlowLogSagsRequest {
    /**
     * 流日志的地域ID。
     * @example `cn-shanghahi`
     */
    "RegionId": string;
    /**
     * 流日志实例ID。
     * @example `fl-l934tsa5504yuc****`
     */
    "FlowLogId"?: string;
    /**
     * 指定分页查询时每页的列表行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询列表的页码，起始值为**1**，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
