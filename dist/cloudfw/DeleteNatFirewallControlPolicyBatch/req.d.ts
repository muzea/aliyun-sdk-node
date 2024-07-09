export interface DeleteNatFirewallControlPolicyBatchRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * ACL uuid 列表。
     */
    "AclUuidList"?: string[];
    /**
     * NAT网关的ID。
     * @example `ngw-uf6j0426ap74vd6vrb676`
     */
    "NatGatewayId": string;
    /**
     * 访问控制策略的流量方向。取值：
     * - **out**：内对外流量。
     * @example `out`
     */
    "Direction"?: string;
}
