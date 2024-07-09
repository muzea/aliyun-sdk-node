export interface ListTransitRouterAvailableResourceRequest {
    /**
     * 企业版转发路由器所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否只查询支持组播功能的可用区的信息。
     * - **true**：是。
     *     开启查询功能后，如果**ListTransitRouterAvailableResource**接口返回结果为空，则表示当前地域的企业版转发路由器不支持组播功能。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "SupportMulticast"?: boolean;
}
