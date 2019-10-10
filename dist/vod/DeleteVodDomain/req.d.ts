interface DeleteVodDomainRequest {
    "RegionId"?: string;
    /**
    * 点播加速域名，多个用英文逗号分隔。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DeleteVodDomainRequest };