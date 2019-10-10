interface StartLiveDomainRequest {
    "RegionId"?: string;
    /**
    * 直播域名。
    * @example `live.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { StartLiveDomainRequest };