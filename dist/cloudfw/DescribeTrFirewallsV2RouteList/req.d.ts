export interface DescribeTrFirewallsV2RouteListRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-8bcfa0f2f12d411e****`
     */
    "FirewallId"?: string;
    /**
     * 防火墙路由策略ID。
     * @example `policy-7d5c672e37ee4175****`
     */
    "TrFirewallRoutePolicyId"?: string;
    /**
     * 分页查询时的页码。默认值为1。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为10.
     * @example `10`
     */
    "PageSize"?: string;
}
