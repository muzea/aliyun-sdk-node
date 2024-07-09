export interface CreateIpv6EgressOnlyRuleRequest {
    /**
     * IPv6网关的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * IPv6网关实例ID。
     * @example `ipv6gw-hp3c2paq0ywauasza****`
     */
    "Ipv6GatewayId": string;
    /**
     * 需要设置仅主动出规则的IPv6地址ID。
     * @example `ipv6-hp3nxjkfxn5pnhgl5****`
     */
    "InstanceId": string;
    /**
     * 需要设置仅主动出规则的实例类型。
     * 仅取值：**Ipv6Address**（默认值），表示为IPv6地址类型。
     * @example `Ipv6Address`
     */
    "InstanceType"?: string;
    /**
     * 仅主动出规则的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-），开头不能为`http://`或`https://`。
     * @example `rulename`
     */
    "Name"?: string;
    /**
     * 仅主动出规则的描述。
     * 长度为2~256个字符，开头不能为`http://`或`https://`。
     * @example `ruledescription`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
}
