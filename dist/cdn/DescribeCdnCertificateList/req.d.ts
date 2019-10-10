interface DescribeCdnCertificateListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 域名。仅支持单个域名查询。
    * @example `example.com`
    */ "DomainName"?: string;
}
export { DescribeCdnCertificateListRequest };