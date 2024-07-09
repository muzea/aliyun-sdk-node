export interface ModifyFirewallRuleRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 防火墙规则ID。
     * @example `eeea34d9867b4d55a4ff8d5fcfbd****`
     */
    "RuleId": string;
    /**
     * 传输层协议。取值范围：
     * - TCP：TCP协议。
     * - UDP：UDP协议。
     * - TCP+UDP：TCP和UDP协议。
     * @example `TCP`
     */
    "RuleProtocol": string;
    /**
     * 端口范围。端口的取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口，例如：`1024/1055`表示端口范围为1024~1055。
     * @example `3306`
     */
    "Port": string;
    /**
     * 地址或地址段。
     * @example `10.147.33.**`
     */
    "SourceCidrIp"?: string;
    /**
     * 防火墙规则的备注。
     * @example `自定义`
     */
    "Remark"?: string;
}
