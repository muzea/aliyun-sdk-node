export interface ModifyChatappTemplateResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 模板Code。
         * @example `8472929283883`
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
