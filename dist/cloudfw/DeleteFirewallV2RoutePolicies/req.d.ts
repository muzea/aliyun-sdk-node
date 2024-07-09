export interface DeleteFirewallV2RoutePoliciesRequest {
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
     * 防火墙路由策略ID。
     * @example `policy-2d06d3568fd74d60****`
     */
    "TrFirewallRoutePolicyId"?: string;
}
