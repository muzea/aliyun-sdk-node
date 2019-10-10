interface StartDcdnIpaDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入全站加速IPA的域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { StartDcdnIpaDomainRequest };