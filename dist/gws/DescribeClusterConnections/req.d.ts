export interface DescribeClusterConnectionsRequest {
    /**
     * 云桌面集群 id。
     * @example `gws-xxx`
     */
    "ClusterId": string;
    /**
     * 查询区间的起始日期。
     * @example `2020-09-07`
     */
    "StartTime": string;
    /**
     * 查询区间的截止日期。
     * @example `2020-09-01`
     */
    "EndTime": string;
    /**
     * 做异步查询时的 task id。
     * @example `t-xxx`
     */
    "TaskId"?: string;
}
