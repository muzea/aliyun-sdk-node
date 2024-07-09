export interface ActivateRouterInterfaceRequest {
    /**
     * 路由器接口所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 路由器接口ID。
     * @example `ri-2zeo3xzyf38r4urz****`
     */
    "RouterInterfaceId": string;
}
