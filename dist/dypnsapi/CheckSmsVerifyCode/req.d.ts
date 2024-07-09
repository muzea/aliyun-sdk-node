export interface CheckSmsVerifyCodeRequest {
    /**
     * 方案名称，如果不填则为“默认方案”。最多不超过20个字符。
     * @example `测试方案`
     */
    "SchemeName"?: string;
    /**
     * 号码国家编码，默认为86。
     * @example `86`
     */
    "CountryCode"?: string;
    /**
     * 手机号。
     * @example `186****0000`
     */
    "PhoneNumber": string;
    /**
     * 外部流水号。
     * @example `12123231`
     */
    "OutId"?: string;
    /**
     * 验证码。
     * @example `1231`
     */
    "VerifyCode": string;
    /**
     * 验证码大小写字母核验策略。
     * - 1：不区分大小写。
     * - 2：区分大小写。
     * @example `1`
     */
    "CaseAuthPolicy"?: number;
}
