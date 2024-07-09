export interface GetIpv4GatewayAttributeRequest {
    /**
     * 要查询IPv4网关实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 要查询的IPv4网关的实例ID。
     * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
     */
    "Ipv4GatewayId": string;
}
