export interface RenewInstanceResponse {
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
         * 错误码。
         * @example `InvalidChargeType.UnRenewable`
         */
        Code: string;
        /**
         * 错误详细信息。
         * @example `不支持续费的付费类型`
         */
        Message: string;
        /**
         * 订单Id
         * @example `221625608580893`
         */
        OrderId: string;
        /**
         * 续费是否成功。
         * - true：续费成功。
         * - false：续费失败。
         * @example `true`
         */
        Success: boolean;
    };
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
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求结果，表示此次请求是否发生异常，和业务无关
     * @example `false`
     */
    Success: string;
}
