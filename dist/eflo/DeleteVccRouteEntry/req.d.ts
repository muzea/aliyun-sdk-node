export interface DeleteVccRouteEntryRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 目标网段
     * @example `172.16.199.128/25`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 灵骏连接实例ID
     * @example `vcc-cn-zvp2w222001`
     */
    "VccId"?: string;
    /**
     * 路由条目ID
     * @example `vcc-rte-5cey1sap`
     */
    "VccRouteEntryId"?: string;
}
