export interface GetChatappVerifyCodeRequest {
    /**
     * 号码。
     * @example `861380000****`
     */
    "PhoneNumber": string;
    /**
     * ISV子客户的SpaceId。
     * @example `cams-kei****`
     */
    "CustSpaceId": string;
    /**
     * 验证码方式。
     * @example `sms`
     */
    "Method": string;
    /**
     * 语言。
     * @example `zh_CN`
     */
    "Locale": string;
}
