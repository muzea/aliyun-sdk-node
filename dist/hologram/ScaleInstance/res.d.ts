export interface ScaleInstanceResponse {
    /**
     * Id of the request
     * @example `D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 订单Id
         * @example `219183853450000`
         */
        OrderId: string;
        /**
         * 错误码。
         * @example `InvalidScaleType.Unsupported`
         */
        Code: string;
        /**
         * 错误详细信息。
         * @example `不支持的变配类型`
         */
        Message: string;
        /**
         * 变配是否成功。
         * @example `true`
         */
        Success: boolean;
    };
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 错误码
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMessage: string;
}
