export interface DescribeVpcFirewallDetailRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例ID。
     * > 您可以调用[DescribeVpcFirewallList](~~342932~~)接口查询VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    "VpcFirewallId": string;
    /**
     * 本端VPC的实例ID。
     * @example `vpc-8vbwbo90rq0anm6t****`
     */
    "LocalVpcId"?: string;
    /**
     * 对端VPC的实例ID。
     * @example `vpc-90rq0anm6t8vbwbo****`
     */
    "PeerVpcId"?: string;
}
