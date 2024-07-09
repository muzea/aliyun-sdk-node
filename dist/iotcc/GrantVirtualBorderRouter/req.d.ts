export interface GrantVirtualBorderRouterRequest {
    /**
     * 边界路由器VBR实例ID。
     * @example `vbr-bp1svadp4lq38janc****`
     */
    "VirtualBorderRouterId"?: string;
    /**
     * 边界路由器VBR实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
