export interface DeleteIpv6EgressOnlyRuleRequest {
    /**
     * IPv6网关所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 要删除的仅主动出规则ID。
     * @example `ipv6py-hp3w98rmlbqp0xxxxxxxx`
     */
    "Ipv6EgressOnlyRuleId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123456`
     */
    "ClientToken"?: string;
}
