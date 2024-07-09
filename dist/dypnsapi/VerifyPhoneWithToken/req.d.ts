export interface VerifyPhoneWithTokenRequest {
    /**
     * 手机号。
     * @example `1380000****`
     */
    "PhoneNumber": string;
    /**
     * JSSDK获取的号码认证Token。
     * @example `Dfafdafad542****`
     */
    "SpToken": string;
}
