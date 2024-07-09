export interface CreateVccRouteEntryRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 目标网段
     * @example `192.168.98.112/28`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 灵骏连接实例ID
     * @example `vcc-cn-zvp2w222001`
     */
    "VccId"?: string;
}
