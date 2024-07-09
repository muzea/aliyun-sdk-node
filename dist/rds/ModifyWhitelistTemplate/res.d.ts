export interface ModifyWhitelistTemplateResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 返回状态。各取值含义如下：
         * - **ok**：正常返回
         * - **error**：错误返回
         * @example `ok`
         */
        Status: string;
    };
    /**
     * 请求ID，每次请求都是唯一值，便于后续排查问题。
     * @example `08A3B71B-FE08-4B03-974F-CC7EA6DB1828`
     */
    RequestId: string;
    /**
     * 表示请求是否成功，各取值含义如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码。各取值含义如下：
     * - **200**：正常
     * - **400**：客户端错误
     * - **401**：身份验证失败
     * - **404**：找不到请求页面
     * - **500**：服务端错误
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * Http状态码。各取值含义如下：
     * - **200**：正常
     * - **400**：客户端错误
     * - **500**：服务端错误
     * @example `200`
     */
    HttpStatusCode: number;
}
