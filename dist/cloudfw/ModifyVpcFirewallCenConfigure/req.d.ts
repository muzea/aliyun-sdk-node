export interface ModifyVpcFirewallCenConfigureRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例ID。
     * > 您可以通过调用[DescribeVpcFirewallCenList](~~345777~~)接口查询VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    "VpcFirewallId": string;
    /**
     * VPC边界防火墙的实例名称。
     * @example `测试用实例`
     */
    "VpcFirewallName": string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
}
