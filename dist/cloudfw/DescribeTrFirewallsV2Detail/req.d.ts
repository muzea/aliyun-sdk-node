export interface DescribeTrFirewallsV2DetailRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-a5a6b89f46764928****`
     */
    "FirewallId"?: string;
}
