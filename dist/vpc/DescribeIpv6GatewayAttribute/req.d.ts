export interface DescribeIpv6GatewayAttributeRequest {
    /**
     * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 要查询的IPv6网关ID。
     * @example `ipv6gw-hp3y0l3ln89j8cdvf****`
     */
    "Ipv6GatewayId": string;
}
