interface BatchStopDcdnDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入全站加速的域名，多个用逗号（,）分隔。
    * @example `test.com`
    */ "DomainNames": string;
    "OwnerId"?: number;
}
export { BatchStopDcdnDomainRequest };