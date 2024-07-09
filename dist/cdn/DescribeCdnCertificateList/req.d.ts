export interface DescribeCdnCertificateListRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * 如果不传入该参数，默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
}
