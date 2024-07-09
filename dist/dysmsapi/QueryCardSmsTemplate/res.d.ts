export interface QueryCardSmsTemplateResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求的唯一标识。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
    /**
     * 是否成功。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 返回模板列表。
         */
        Templates: any[];
    };
}
