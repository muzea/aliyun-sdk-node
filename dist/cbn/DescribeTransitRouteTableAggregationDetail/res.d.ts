export interface DescribeTransitRouteTableAggregationDetailResponse {
    /**
     * 聚合路由的配置详情。
     */
    Data: {
        /**
         * 被配置聚合路由的VPC实例ID。
         * @example `vpc-6eh7fp9hdqa2wv85t****`
         */
        InstanceId: string;
        /**
         * 聚合路由配置失败后的返回信息。
         * @example `desctest`
         */
        Description: string;
        /**
         * 聚合路由的配置状态。
         * - **Configured**：聚合路由已下发至VPC实例。
         * - **Configuring**：聚合路由下发中。
         * - **ConfigFailed**：聚合路由下发失败。
         * - **PartialConfigured**：聚合路由部分下发失败。
         * - **Deleting**：聚合路由删除中。
         * @example `Configured`
         */
        Status: string;
    }[];
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    Count: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50`
     */
    RequestId: string;
}
