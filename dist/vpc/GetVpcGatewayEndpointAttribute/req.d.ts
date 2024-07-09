export interface GetVpcGatewayEndpointAttributeRequest {
    /**
     * 网关终端节点实例ID。
     * @example `vpce-bp1w1dmdqjpwul0v3****`
     */
    "EndpointId": string;
    /**
     * 网关终端节点所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
