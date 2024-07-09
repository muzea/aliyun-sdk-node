export interface BatchCopyVpcFirewallControlPolicyRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 该操作的源VPC边界防火墙的访问控制策略组ID。取值：
     * - VPC边界防火墙防护云企业网内的网络实例（网络实例包含VPC、VBR和CCN）和指定VPC之间的互访流量时，策略组ID使用云企业网实例ID。
     * - VPC边界防火墙防护通过高速通道连接的两个VPC之间的流量时，策略组ID使用VPC边界防火墙实例ID。
     * > 您可以通过调用[DescribeVpcFirewallAclGroupList](~~159760~~)接口获取该ID。
     * @example `vfw-a42bbb7b887148c9****`
     */
    "SourceVpcFirewallId": string;
    /**
     * 该操作的目标VPC边界防火墙的访问控制策略组ID。取值：
     * - VPC边界防火墙防护云企业网内的网络实例（网络实例包含VPC、VBR和CCN）和指定VPC之间的互访流量时，策略组ID使用云企业网实例ID。
     * - VPC边界防火墙防护通过高速通道连接的两个VPC之间的流量时，策略组ID使用VPC边界防火墙实例ID。
     * > 您可以通过调用[DescribeVpcFirewallAclGroupList](~~159760~~)接口获取该ID。
     * @example `vfw-e37d3a04cf79446a****`
     */
    "TargetVpcFirewallId": string;
}
