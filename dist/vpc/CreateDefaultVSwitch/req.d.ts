export interface CreateDefaultVSwitchRequest {
    /**
     * 要创建的默认交换机所属的可用区ID。
     * 您可以通过调用[DescribeZones](~~36064~~)接口获取可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 要创建的默认交换机的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 交换机IPv6网段的最后8比特位，取值：**0**～**255**。
     * @example `12`
     */
    "Ipv6CidrBlock"?: number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
}
