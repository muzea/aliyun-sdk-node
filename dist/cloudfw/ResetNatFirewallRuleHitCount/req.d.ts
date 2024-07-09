export interface ResetNatFirewallRuleHitCountRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 访问控制策略唯一标识。
     * @example `3de3aed5-6de7-4ecd-9106-cfe994b9c49f`
     */
    "AclUuid": string;
    /**
     * NAT网关的ID。
     * @example `ngw-zm0h3c1exm5bifuorg8c5`
     */
    "NatGatewayId"?: string;
}
