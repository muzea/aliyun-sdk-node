export interface UpdateDnsCacheDomainRemarkRequest {
    /**
     * 语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称
     * @example `dns-example.com`
     */
    "DomainName": string;
    /**
     * 备注，长度限制50个字符，只可包含中英文数字以及 . 、_、-
     * @example `test`
     */
    "Remark"?: string;
}
