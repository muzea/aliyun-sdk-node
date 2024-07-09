export interface GetNatGatewayAttributeRequest {
    /**
     * NAT网关所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * NAT网关实例ID。
     * @example `ngw-bp1b0lic8uz4r6vf2****`
     */
    "NatGatewayId": string;
}
