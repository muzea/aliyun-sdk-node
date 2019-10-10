interface DescribeDomainCustomLogConfigRequest {
    "RegionId"?: string;
    /**
    * 域名（只支持单个查询）。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DescribeDomainCustomLogConfigRequest };