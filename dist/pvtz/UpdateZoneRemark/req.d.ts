export interface UpdateZoneRemarkRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * Zone ID，Zone的唯一识别码。
     * @example `AgIDE1MA_1**`
     */
    "ZoneId": string;
    /**
     * 修改之后的目标备注内容。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 用户客户端IP。
     * @example `1.1.XX.XX`
     */
    "UserClientIp"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * @example `21079fa016944979537637959d09bc`
     */
    "ClientToken"?: string;
}
