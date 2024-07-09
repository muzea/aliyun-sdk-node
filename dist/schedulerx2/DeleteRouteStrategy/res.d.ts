export interface DeleteRouteStrategyResponse {
    /**
     * 接口状态码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `strategy is already deleted.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
