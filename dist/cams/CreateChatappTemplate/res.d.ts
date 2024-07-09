export interface CreateChatappTemplateResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2D`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes)。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 返回数据。
     * @example `{"templateCode": "****4b5c79c9432497a075bdfca36bf5"，"templateName": "hello_whatsapp"}`
     */
    Data: {
        /**
         * 模板Code。
         * @example `SMS_232907****`
         */
        TemplateCode: string;
        /**
         * 模板名称。
         * @example `hello_whatsapp`
         */
        TemplateName: string;
    };
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
