export interface GetVpdRouteEntryRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网段实例ID
     * @example `vpd-iv2zm1qf`
     */
    "VpdId": string;
    /**
     * 路由条目实例ID
     * @example `vpd-rte-toekyqel`
     */
    "VpdRouteEntryId": string;
}
