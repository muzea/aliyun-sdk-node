export interface DescribeDcdnSSLCertificateListRequest {
    /**
     * 证书所属加速域名。该域名为HTTPS安全加速类型。
     * @example `www.example.com`
     */
    "DomainName"?: string;
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，取值：**1~1000**之间的任意整数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 证书名称模糊查询。
     * @example `taobao`
     */
    "SearchKeyword"?: string;
}
