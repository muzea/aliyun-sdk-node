interface DescribeL2VipsByDomainRequest {
    "RegionId"?: string;
    /**
    * 域名，只支持单个域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DescribeL2VipsByDomainRequest };