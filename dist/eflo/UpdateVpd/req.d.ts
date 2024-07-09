export interface UpdateVpdRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网段（VPD）实例ID。
     * @example `vpd-omqutbff`
     */
    "VpdId": string;
    /**
     * 灵骏网段（VPD）实例名称。
     * @example `vpd-lingjun`
     */
    "VpdName"?: string;
}
