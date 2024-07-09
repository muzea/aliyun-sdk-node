export interface SetZoneRecordStatusRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 解析记录ID。
     * @example `2075410525`
     */
    "RecordId": number;
    /**
     * 解析记录状态。取值：
     * - ENABLE: 启用解析
     * - DISABLE: 暂停解析
     * @example `ENABLE`
     */
    "Status": string;
    /**
     * 用户Ip。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `6447728c8578e66aacf062d2df4446dc`
     */
    "ClientToken"?: string;
}
