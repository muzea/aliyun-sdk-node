interface DescribeDcdnDomainCnameRequest {
    "RegionId"?: string;
    /**
    * 需要接入CDN的域名，多个域名以逗号（,）分隔。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DescribeDcdnDomainCnameRequest };