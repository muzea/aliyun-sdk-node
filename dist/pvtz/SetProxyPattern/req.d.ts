export interface SetProxyPatternRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * Zone的全局ID。
     * @example `AgIDE0OQ_149`
     */
    "ZoneId": string;
    /**
     * 取值：
     * - **ZONE**: 当前Zone不进行递归解析
     * - **RECORD**: 开启递归解析代理
     * @example `ZONE`
     */
    "ProxyPattern": string;
    /**
     * 用户IP。
     * @example `1.1.1.1`
     */
    "UserClientIp"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * @example `21079fa016944979537637959d09bc`
     */
    "ClientToken"?: string;
}
