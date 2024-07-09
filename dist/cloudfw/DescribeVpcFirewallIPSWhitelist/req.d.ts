export interface DescribeVpcFirewallIPSWhitelistRequest {
    /**
     * 请求和接收消息的语言类型。
     * 取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 云防火墙成员账号的UID。
     * @example `1766185894104675`
     */
    "MemberUid"?: number;
    /**
     * VPC边界防火墙的实例ID。
     * @example `vfw-3547deab1c9b4190a53f`
     */
    "VpcFirewallId": string;
}
