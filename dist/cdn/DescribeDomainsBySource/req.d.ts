interface DescribeDomainsBySourceRequest {
    "RegionId"?: string;
    /**
    * 源站，多个源站用逗号（,）隔开。
    * @example `aaa.source.com`
    */ "Sources": string;
    "OwnerId"?: number;
}
export { DescribeDomainsBySourceRequest };