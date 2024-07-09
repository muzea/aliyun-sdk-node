export interface ModifyIPv6TranslatorBandwidthRequest {
    /**
     *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     *  IPv6转换服务的实例ID。
     * @example `ipv6trans-bp1858ys****`
     */
    "Ipv6TranslatorId": string;
    /**
     *  IPv6转换服务实例的带宽峰值，取值：**1**~**200**。单位：Mbps。
     * @example `2`
     */
    "Bandwidth": number;
    /**
     * 是否自动支付预付费实例的账单，取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "AutoPay"?: boolean;
}
