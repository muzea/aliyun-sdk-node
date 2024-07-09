export interface DeleteIpv6InternetBandwidthRequest {
    /**
     * IPv6网关的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
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
}
