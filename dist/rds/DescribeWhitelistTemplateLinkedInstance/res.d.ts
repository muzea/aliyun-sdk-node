export interface DescribeWhitelistTemplateLinkedInstanceResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 白名单模板ID。
         * @example `412`
         */
        TemplateId: number;
        /**
         * 实例信息。
         */
        InsName: string[];
    };
    /**
     * 请求ID。
     * @example `9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE`
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
     * @example `Successful`
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
