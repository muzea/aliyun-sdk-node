export interface DescribeVpcFirewallCenDetailRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例ID。
     * > 您可以调用[DescribeVpcFirewallCenList](~~345777~~)接口查询VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    "VpcFirewallId": string;
    /**
     * 创建VPC边界防火墙的VPC实例ID。
     * @example `vpc-2zefk9fbn8j7v585g****`
     */
    "NetworkInstanceId"?: string;
}
