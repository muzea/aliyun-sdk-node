export interface CreateInstanceInternetAddressRequest {
    /**
     * DRDS实例ID。
     * @example `drds****************`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
