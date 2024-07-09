export interface EnableInstanceIpv6AddressRequest {
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
