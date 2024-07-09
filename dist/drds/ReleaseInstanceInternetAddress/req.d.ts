export interface ReleaseInstanceInternetAddressRequest {
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 实例所在地域。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
