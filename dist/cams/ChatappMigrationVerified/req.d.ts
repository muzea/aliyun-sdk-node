export interface ChatappMigrationVerifiedRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `29348393884****`
     */
    "CustSpaceId": string;
    /**
     * 手机号码。
     * @example `86138000****`
     */
    "PhoneNumber": string;
    /**
     * 验证码。
     * @example `8287**`
     */
    "VerifyCode": string;
}
