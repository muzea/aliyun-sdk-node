export interface QueryCardSmsTemplateReportResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `CC89A90C-978F-46AC-B80D-54738371E7CA`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
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
         * 返回数据列表。
         */
        model: any[];
    };
}
