export interface CreateFirewallRuleRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 指定的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 传输层协议。取值范围：
     * - TCP：TCP协议。
     * - UDP：UDP协议。
     * - TCP+UDP：TCP和UDP协议。
     * - ICMP: ICMP协议。
     * @example `TCP`
     */
    "RuleProtocol": string;
    /**
     * 端口范围。
     * - TCP/UDP: 端口的取值范围：1~65535。使用正斜线（/）隔开起始端口和终止端口，例如：1024/1055表示端口范围1024~1055。
     * - ICMP: -1/-1。代表全部端口。
     * @example `3306/3306`
     */
    "Port": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 防火墙规则的备注。
     * @example `TEST`
     */
    "Remark"?: string;
}
