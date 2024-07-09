export interface DescribeTransitRouteTableAggregationResponse {
    /**
     * 聚合路由信息列表。
     */
    Data: {
        /**
         * 聚合路由的名称。
         * @example `nametest`
         */
        Name: string;
        /**
         * 聚合路由的目标网段。
         * @example `192.168.10.0/24`
         */
        TransitRouteTableAggregationCidr: string;
        /**
         * 聚合路由的传播范围。
         * 仅取值：**VPC**，表示向已与当前企业版转发路由器路由表创建关联转发关系并已开启路由同步功能的所有VPC实例传播聚合路由。
         * @example `VPC`
         */
        Scope: string;
        /**
         * 聚合路由的路由类型。
         * 仅取值：**Static**，表示静态路由。聚合路由被传播至VPC实例后，默认为自定义路由条目。
         * @example `Static`
         */
        RouteType: string;
        /**
         * 聚合路由的描述信息。
         * @example `desctest`
         */
        Description: string;
        /**
         * 企业版转发路由器路由表ID。
         * @example `vtb-6ehgc262hr170qgyc****`
         */
        TrRouteTableId: string;
        /**
         * 聚合路由的传播状态。
         * - **AllConfigured**：聚合路由已下发至全部VPC实例。
         * - **Configuring**：聚合路由下发中。
         * - **ConfigFailed**：聚合路由下发失败。
         * - **PartialConfigured**：部分VPC没有被成功下发聚合路由。
         * - **Deleting**：聚合路由删除中。
         * @example `AllConfigured`
         */
        Status: string;
    }[];
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    Count: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
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
