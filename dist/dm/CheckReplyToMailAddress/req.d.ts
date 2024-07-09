export interface CheckReplyToMailAddressRequest {
    /**
     * 语言
     * @example `无`
     */
    "Lang"?: string;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 发信地址ID
     * @example `126545`
     */
    "MailAddressId": number;
}
