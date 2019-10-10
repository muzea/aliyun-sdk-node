interface DeleteLiveDomainRequest {
    "RegionId"?: string;
    /**
    * 要删除的域名。
    * @example `live.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DeleteLiveDomainRequest };