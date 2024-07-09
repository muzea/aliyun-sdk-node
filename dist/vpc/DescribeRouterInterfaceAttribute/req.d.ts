export interface DescribeRouterInterfaceAttributeRequest {
    /**
     * 路由器接口所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 要查询的路由器接口ID。
     * @example `ri-m5egfc10sednwk2yt****`
     */
    "InstanceId": string;
}
