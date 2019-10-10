interface DeleteIpv6GatewayRequest {
    /**
    * IPv6网关所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * 要删除的IPv6网关实例ID。
    * @example `ipv6gw-hp3y0l3ln89j8xxxxxxxx`
    */ "Ipv6GatewayId": string;
    "OwnerId"?: number;
}
export { DeleteIpv6GatewayRequest };