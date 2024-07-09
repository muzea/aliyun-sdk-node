export interface DeleteZoneRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * zone ID。
     * @example `AgIDE1MA_150`
     */
    "ZoneId": string;
    /**
     * 用户Ip。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `21079fa016944979537637959d09bc`
     */
    "ClientToken"?: string;
}
