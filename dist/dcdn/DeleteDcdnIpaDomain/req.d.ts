interface DeleteDcdnIpaDomainRequest {
    "RegionId"?: string;
    /**
    * 要删除的域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 资源组ID。
    * @example `123`
    */ "ResourceGroupId"?: string;
}
export { DeleteDcdnIpaDomainRequest };