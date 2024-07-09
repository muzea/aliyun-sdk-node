export interface AllocateIpv6InternetBandwidthRequest {
    /**
     * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * IPv6网关的ID。
     * @example `ipv6gw-uf6hcyzu65v98v3du****`
     */
    "Ipv6GatewayId": string;
    /**
     * IPv6地址的ID。
     * @example `ipv6-2zen5j4axcp5l5qyy****`
     */
    "Ipv6AddressId": string;
    /**
     * IPv6公网带宽的计费方式。取值：
     * <props="china">
     * - **PayByTraffic**：按使用流量计费。
     * - **PayByBandwidth**（默认值）：按带宽计费。
     * - **PayByOld95**：表示按传统95计费。IPv6公网带宽默认不支持按传统95计费，如需使用，请联系客户经理申请。
     * </props>
     * <props="intl">
     * - **PayByTraffic**：按使用流量计费。
     * - **PayByBandwidth**（默认值）：按带宽计费。
     * </props>
     * @example `PayByBandwidth`
     */
    "InternetChargeType"?: string;
    /**
     * IPv6地址的公网带宽。单位：Mbps。
     * <props="china">
     * - 当**InternetChargeType**为**PayByTraffic**时，公网带宽取值范围：**1**~**1000**。
     * - 当**InternetChargeType**为**PayByBandwidth**时，公网带宽取值范围：**1**~**2000**。
     * -  当**InternetChargeType**为**PayByOld95**时，公网带宽取值范围：**1**~**2000**。
     * </props>
     * <props="intl">
     *
     * - 当**InternetChargeType**为**PayByTraffic**时，公网带宽取值范围：**1**~**1000**。
     * - 当**InternetChargeType**为**PayByBandwidth**时，公网带宽取值范围：**1**~**2000**。
     * </props>
     * @example `200`
     */
    "Bandwidth": number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
