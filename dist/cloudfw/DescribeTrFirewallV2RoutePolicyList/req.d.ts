export interface DescribeTrFirewallV2RoutePolicyListRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-d5ba592ac6c84aff****`
     */
    "FirewallId"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为10.
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 防火墙路由策略ID。
     * @example `policy-7b66257c14e141fb****`
     */
    "PolicyId"?: string;
}
