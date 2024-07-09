export interface VerifyCaptchaResponse {
    /**
     * Id of the request
     * @example `95784F***D39FDC5`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码
     * @example `Success`
     */
    Code: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 验证结果。
         * - true：验证通过。
         * - false：验证不通过。
         * @example `true`
         */
        VerifyResult: boolean;
    };
}
