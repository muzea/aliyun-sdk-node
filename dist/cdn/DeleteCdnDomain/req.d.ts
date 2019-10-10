interface DeleteCdnDomainRequest {
    "RegionId"?: string;
    /**
    * 要删除的CDN的域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 资源组ID。
    * @example `your resourceGroupId`
    */ "ResourceGroupId"?: string;
}
export { DeleteCdnDomainRequest };