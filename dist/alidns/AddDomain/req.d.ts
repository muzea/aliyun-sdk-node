export interface AddDomainRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    "DomainName": string;
    /**
     * 域名分组ID，默认为默认分组的GroupId。
     * @example `2223`
     */
    "GroupId"?: string;
    /**
     * 资源组ID。
     * @example `rg-resourcegroupid`
     */
    "ResourceGroupId"?: string;
}
