interface StopDcdnDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入全站加速的域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { StopDcdnDomainRequest };