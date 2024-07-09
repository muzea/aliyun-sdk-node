export interface DeleteZoneRecordRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 解析记录ID。
     * @example `3062799768`
     */
    "RecordId": number;
    /**
     * 用户Ip。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `6447728c8578e66aacf062d2df4446dc`
     */
    "ClientToken"?: string;
}
