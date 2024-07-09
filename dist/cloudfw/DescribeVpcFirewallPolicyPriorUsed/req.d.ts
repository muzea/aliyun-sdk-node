export interface DescribeVpcFirewallPolicyPriorUsedRequest {
    /**
     * 请求和接收消息的语言类型。
     * 取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的访问控制策略组ID。您可调用[DescribeVpcFirewallAclGroupList](~~159760~~)接口获取该ID。
     * 取值：
     * - VPC边界防火墙防护云企业网时，策略组ID使用云企业网实例ID。
     *   例如cen-ervw0g12b5jbw*\*\*\*
     * - VPC边界防火墙防护高速通道时，策略组ID使用VPC边界防火墙实例ID。
     *    例如vfw-a42bbb7b887148c9*\*\*\*
     * @example `vfw-a42bbb7b887148c9****`
     */
    "VpcFirewallId": string;
}
