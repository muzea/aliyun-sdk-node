export interface DescribeNatFirewallPolicyPriorUsedRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * NAT网关的ID。
     * @example `ngw-xxxxxx`
     */
    "NatGatewayId": string;
    /**
     * 访问控制策略的流量方向。
     * 取值：
     * - **out**：内对外流量。
     * @example `out`
     */
    "Direction": string;
    /**
     * 支持的IP地址版本。取值：
     * - **4**（默认）：代表IPv4地址
     * @example `4`
     */
    "IpVersion"?: string;
}
