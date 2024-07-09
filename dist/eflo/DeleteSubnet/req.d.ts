export interface DeleteSubnetRequest {
    /**
     * 地域
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 可用区
     * @example `cn-wulanchabu-b`
     */
    "ZoneId": string;
    /**
     * 所属灵骏网段 ID
     * @example `vpd-iv2zm1qf`
     */
    "VpdId": string;
    /**
     * 灵骏子网 ID
     * @example `subnet-f3zfzmnc`
     */
    "SubnetId": string;
}
