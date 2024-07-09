export interface DeleteRouteEntryRequest {
    /**
     * 路由表所属地域的ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 路由条目所在的路由表的ID。
     * @example `vtb-2ze3jgygk9bmsj23s****`
     */
    "RouteTableId"?: string;
    /**
     * 要删除的路由条目ID，和DestinationCidrBlock参数互斥。
     * @example `rte-bp1mnnr2al0naomnpv****`
     */
    "RouteEntryId"?: string;
    /**
     * 路由条目的目标网段，支持IPv4网段、IPv6网段、前缀列表网段和前缀列表的实例ID，和RouteEntryId参数互斥。
     * @example `47.100.XX.XX/16`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 下一跳实例的ID。
     * - 删除ECMP外的其他路由条目时，请配置**NextHopId**，无需配置**NextHopList**。
     * - 删除ECMP路由条目时，请配置**NextHopList**，无需配置**NextHopId**。
     * @example `ri-2zeo3xzyf38r4urzd****`
     */
    "NextHopId"?: string;
    /**
     * ECMP路由的下一跳实例信息。最多支持16个下一跳实例信息。
     */
    "NextHopList"?: {
        /**
         * ECMP路由条目的下一跳实例的ID。最多支持16个下一跳实例信息。
         * @example `ri-2zeo3xzyf38r43cd****`
         */
        NextHopId: string;
        /**
         * ECMP路由的下一跳的类型，目前只能取值**RouterInterface**（路由器接口）。最多支持16个下一跳实例信息。
         * @example `RouterInterface`
         */
        NextHopType: string;
    }[];
}
