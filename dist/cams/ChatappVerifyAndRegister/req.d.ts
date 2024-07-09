export interface ChatappVerifyAndRegisterRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `2938929938****`
     */
    "CustSpaceId": string;
    /**
     * 号码。
     * @example `861380000****`
     */
    "PhoneNumber": string;
    /**
     * 验证码。
     * @example `1234**`
     */
    "VerifyCode": string;
}
