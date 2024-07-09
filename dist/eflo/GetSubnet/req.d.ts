export interface GetSubnetRequest {
    /**
     * 地域。
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 灵骏子网实例ID。
     * @example `subnet-2avf0itf`
     */
    "SubnetId": string;
    /**
     * 所属灵骏网段 ID。
     * @example `vpd-cxcmdk1m`
     */
    "VpdId"?: string;
}
