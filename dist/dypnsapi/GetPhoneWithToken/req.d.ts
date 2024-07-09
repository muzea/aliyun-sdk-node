export interface GetPhoneWithTokenRequest {
    /**
     * JSSDK获取的号码认证Token。
     * Token的使用有效期，中国电信10分钟，仅可使用一次；中国联通30分钟，仅可使用一次；中国移动2分钟，仅可使用一次。
     * @example `Dfafdafad542****`
     */
    "SpToken": string;
}
