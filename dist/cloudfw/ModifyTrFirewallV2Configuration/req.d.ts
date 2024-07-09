export interface ModifyTrFirewallV2ConfigurationRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-bcdf89d405ce4bd2****`
     */
    "FirewallId"?: string;
    /**
     * VPC边界防火墙实例名。
     * @example `VPC边界防火墙`
     */
    "FirewallName"?: string;
}
