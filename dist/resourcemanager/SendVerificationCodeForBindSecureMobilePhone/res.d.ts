export interface SendVerificationCodeForBindSecureMobilePhoneResponse {
    /**
     * 请求ID。
     * @example `DCD43660-75DD-5D15-B342-1B83FCA5B913`
     */
    RequestId: string;
    /**
     * 验证码过期时间。
     * @example `2021-12-17T07:38:41.747Z`
     */
    ExpirationDate: string;
}
