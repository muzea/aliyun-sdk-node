export interface GetMessageConfigResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 短信发送状态回执接收服务地址。
         * @example `http://example.com`
         */
        SmsReportUrl: string;
        /**
         * 上行短信消息接收服务地址。
         * @example `http://example.com`
         */
        SmsUpUrl: string;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
