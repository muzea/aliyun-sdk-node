export interface UnAssociateVpdCidrBlockRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网段实例ID。
     * @example `vpd-aof7dat1`
     */
    "VpdId": string;
    /**
     * 附加网段。
     * @example `192.168.0.0/16`
     */
    "SecondaryCidrBlock": string;
}
