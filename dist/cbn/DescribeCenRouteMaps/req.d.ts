export interface DescribeCenRouteMapsRequest {
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云企业网实例ID。
     * @example `cen-wx12mmlt17ld82****`
     */
    "CenId": string;
    /**
     * 路由策略ID。
     * @example `cenrmap-y40mxdvf7joc12****`
     */
    "RouteMapId"?: string;
    /**
     * 路由策略应用的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "CenRegionId"?: string;
    /**
     * 路由策略的应用方向。取值：
     * - **RegionIn**：入地域网关方向，表示路由传入云企业网地域网关的方向。
     *  例如：路由从本地域的网络实例发布到本地域网关，或其他地域的路由发布到本地域网关。
     * - **RegionOut**：出地域网关方向，表示路由传出云企业网地域网关的方向。
     *  例如：路由从本地域网关发布到本地域下的网络实例，或发布到其他地域的地域网关。
     * @example `RegionOut`
     */
    "TransmitDirection"?: string;
    /**
     * 路由策略关联的转发路由器路由表ID。
     * @example `vtb-gw8nx3515m1mbd1z1****`
     */
    "TransitRouterRouteTableId"?: string;
}
