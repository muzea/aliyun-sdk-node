export interface DescribeCdnSSLCertificateListRequest {
    /**
     * 加速域名，仅支持查询单个域名。
     * @example `www.example.com
    `
     */
    "DomainName"?: string;
    /**
     * 页码。默认值：**1** 。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * 取值：**1**~**1000**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 证书名称模糊查询。
     * @example `certabc`
     */
    "SearchKeyword"?: string;
}
