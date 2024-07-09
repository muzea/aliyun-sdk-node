export interface DescribeDomainDetailRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要查询的域名或网站的名称。
     * > 不支持模糊查询，您需要输入完整的域名或网站名称。
     * @example `example.com`
     */
    "DomainName": string;
}
