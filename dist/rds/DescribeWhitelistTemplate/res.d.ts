export interface DescribeWhitelistTemplateResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 白名单模板信息。
         */
        Template: {
            /**
             * 数据表主键。
             * @example `1013`
             */
            Id: number;
            /**
             * 用户ID。
             * @example `16****`
             */
            UserId: number;
            /**
             * 白名单模板ID。
             * @example `424`
             */
            TemplateId: number;
            /**
             * 白名单模板名称。
             * @example `template_123`
             */
            TemplateName: string;
            /**
             * IP列表。
             * @example `10.1.X.X,2.3.X.X`
             */
            Ips: string;
        };
    };
    /**
     * 请求ID。
     * @example `ED169A3E-1657-4104-82AB-24EA8CD0DB75`
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
     * @example `success`
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
