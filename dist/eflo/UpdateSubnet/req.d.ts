export interface UpdateSubnetRequest {
    /**
     * 地域
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 可用区
     * @example `cn-wulanchabu-a`
     */
    "ZoneId": string;
    /**
     * 所属灵骏网段实例ID
     * @example `vpd-aof7dat1`
     */
    "VpdId": string;
    /**
     * 灵骏子网实例ID
     * @example `subnet-f3zfzmnc`
     */
    "SubnetId": string;
    /**
     * 灵骏子网实例名称
     * @example `subnet-1`
     */
    "SubnetName"?: string;
}
