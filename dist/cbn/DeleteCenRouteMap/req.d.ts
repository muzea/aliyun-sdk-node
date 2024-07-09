export interface DeleteCenRouteMapRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jm****`
     */
    "CenId": string;
    /**
     * 路由策略应用的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "CenRegionId": string;
    /**
     * 路由策略ID。
     * @example `cenrmap-abcdedfghij****`
     */
    "RouteMapId": string;
}
