interface StartCdnDomainRequest {
    "RegionId"?: string;
    /**
    * 需要接入CDN的域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { StartCdnDomainRequest };