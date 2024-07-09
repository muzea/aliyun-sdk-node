export interface AssociateVpdCidrBlockRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网段实例ID。
     * @example `vpd-omqutbff`
     */
    "VpdId": string;
    /**
     * 附加网段。
     * @example `172.16.0.0/12`
     */
    "SecondaryCidrBlock": string;
}
