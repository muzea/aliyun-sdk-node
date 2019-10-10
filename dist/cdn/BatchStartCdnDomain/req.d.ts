interface BatchStartCdnDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入CDN的域名，用逗号（,）分隔。
    * @example `example.com`
    */ "DomainNames": string;
    "OwnerId"?: number;
}
export { BatchStartCdnDomainRequest };