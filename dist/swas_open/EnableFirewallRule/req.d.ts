export interface EnableFirewallRuleRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `2ad1ae67295445f598017499dc****`
     */
    "InstanceId": string;
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 防火墙规则ID。
     * @example `eeea34d9867b4d55a4ff8d5fcfbd****`
     */
    "RuleId": string;
    /**
     * 防火墙规则的备注。
     * @example `自定义`
     */
    "Remark"?: string;
    /**
     * 地址或地址段。
     * @example `10.147.33.**`
     */
    "SourceCidrIp"?: string;
}