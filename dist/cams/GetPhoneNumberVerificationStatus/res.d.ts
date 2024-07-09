export interface GetPhoneNumberVerificationStatusResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2D`
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
         * 手机号码。
         * @example `861390000****`
         */
        PhoneNumber: string;
        /**
         * 号码ID。
         * @example `222434****`
         */
        Id: string;
        /**
         * 验证状态。
         * @example `VERIFIED`
         */
        CodeVerificationStatus: string;
    };
}
