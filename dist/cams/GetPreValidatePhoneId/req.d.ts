export interface GetPreValidatePhoneIdRequest {
    /**
     * 号码。
     * @example `86138****`
     */
    "PhoneNumber": string;
    /**
     * 预校验号码购买时提供的验证码。
     * @example `2083**`
     */
    "VerifyCode": string;
}
