export interface ModifyIpv6InternetBandwidthRequest {
    /**
     * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * IPv6地址的ID。
     * > 您必须输入参数**Ipv6AddressId**和参数**Ipv6InternetBandwidthId**中的任意一个。
     * @example `ipv6-2zen5j4axcp5l5qyy****`
     */
    "Ipv6AddressId"?: string;
    /**
     * IPv6地址的公网带宽实例ID。
     * @example `ipv6bw-uf6hcyzu65v98v3du****`
     */
    "Ipv6InternetBandwidthId"?: string;
    /**
     * IPv6地址的公网带宽。单位：Mbps。
     * <props="china">
     * - 计费方式为按使用流量计费时，公网带宽取值范围：**1**~**1000**。
     * - 计费方式为按带宽计费时，公网带宽取值范围：**1**~**2000**。
     * - 计费方式为按传统95计费时，公网带宽取值范围：**1**~**2000**。
     * </props>
     * <props="intl">
     * - 计费方式为按使用流量计费时，公网带宽取值范围：**1**~**1000**。
     * - 计费方式为按带宽计费时，公网带宽取值范围：**1**~**2000**。
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
