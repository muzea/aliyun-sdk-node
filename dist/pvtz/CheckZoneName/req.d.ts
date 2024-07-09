export interface CheckZoneNameRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * zone的名称。此参数为必传参数。
     * @example `example.com`
     */
    "ZoneName"?: string;
    /**
     * 用户Ip。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
}
