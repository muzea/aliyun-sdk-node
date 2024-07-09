export interface ResetVpcFirewallRuleHitCountRequest {
    /**
     * 请求和接收消息的语言类型。
     * 取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 访问控制策略的唯一标识ID。
     * 重置访问控制策略时，需要提供该策略的唯一标识ID。您可调用[DescribeVpcFirewallControlPolicy](~~159758~~)接口获取该ID。
     * @example `00281255-d220-4db1-8f4f-c4df221a****`
     */
    "AclUuid": string;
}
