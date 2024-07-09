export interface GetVpcRouteEntrySummaryResponse {
    /**
     * 请求ID。
     * @example `DC668356-BCB4-42FD-9BC3-FA2B2E04B634`
     */
    RequestId: string;
    /**
     * 查询得到的所有路由表的信息集合。
     */
    RouteEntrySummarys: {
        /**
         * 路由表的ID。
         * @example `vtb-bp145q7glnuzdvzu2****`
         */
        RouteTableId: string;
        /**
         * 单个路由表中不同类型路由条目数的集合。
         */
        EntrySummarys: {
            /**
             * 路由的类型。取值：
             * - **all**：表示所有路由类型。
             * - **custom**：表示自定义路由。
             * - **system**：表示系统路由。
             * - **bgp**：表示BGP路由。
             * - **cen**：表示云企业网CEN（Cloud Enterprise Network）路由。
             * - **type_vpn_bgp_internal**：表示VPN的BGP路由。
             * - **ECR**：表示专线网关路由。
             * > 返回的系统路由为系统路由表下的系统路由。
             * @example `Custom`
             */
            RouteEntryType: string;
            /**
             * 列表条目数。
             * @example `10`
             */
            Count: number;
        }[];
    }[];
}
