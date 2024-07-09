export interface GetMigrationVerifyCodeRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `29348393884****`
     */
    "CustSpaceId": string;
    /**
     * 手机号码。
     * @example `861380000****`
     */
    "PhoneNumber": string;
    /**
     * 语言。
     * @example `zh_CN`
     */
    "Locale": string;
    /**
     * 验证码方式。
     * @example `sms`
     */
    "Method": string;
}
