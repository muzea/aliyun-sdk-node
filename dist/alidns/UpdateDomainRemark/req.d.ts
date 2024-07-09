export interface UpdateDomainRemarkRequest {
    /**
     * 语言。
     * @example `cn`
     */
    "Lang"?: string;
    /**
     * 云解析中已存在的域名。
     * @example `dns-example.top`
     */
    "DomainName": string;
    /**
     * 您的域名的备注信息。
     * @example `这是我在阿里云解析的第一个域名`
     */
    "Remark"?: string;
}
