export interface DeleteNatFirewallControlPolicyRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 访问控制策略的唯一标识ID。
     * 删除安全访问控制策略，需要提供该策略的唯一标识ID。您可调用DescribeNatFirewallControlPolicy接口获取该ID。
     * @example `b6c8f905-2eb6-442a-ba35-9416e9dbb2c5`
     */
    "AclUuid": string;
    /**
     * NAT网关的ID。
     * @example `ngw-xxxxxx`
     */
    "NatGatewayId": string;
    /**
     * 安全访问控制策略管控的流量方向。
     * 取值：
     * - **out**：流量从内到外。
     * @example `out`
     */
    "Direction": string;
}
