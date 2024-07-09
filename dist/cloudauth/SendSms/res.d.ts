export interface SendSmsResponse {
    /**
     * 错误码。关于错误码的详情，请参见**[错误码](~~215420~~)**。
     * @example `200`
     */
    Code: string;
    /**
     * 请求参数的响应消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `130A2C10-B9EE-4D84-88E3-5384FF039795`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    ResultObject: {
        /**
         * 发送回执ID。后续您可以使用该值调用**[DescribeSmsDetail](~~215421~~)**接口，查询具体的发送状态。
         * @example `123456^1234567`
         */
        BizId: string;
    };
}
