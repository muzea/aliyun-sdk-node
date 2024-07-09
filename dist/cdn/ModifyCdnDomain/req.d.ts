export interface ModifyCdnDomainRequest {
    /**
     * 加速域名，仅支持修改单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回源地址列表。
     * > 不支持同时传入**Sources**和**TopLevelDomain**参数，如果您同时传入**Sources**和**TopLevelDomain**参数，**TopLevelDomain**将不生效。
     * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
     */
    "Sources"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
    /**
     * 顶级接入域。只有白名单用户CDN_TOP_LEVEL_DOMAIN_GREY_USER_LIST设置才有效。
     * > 不支持同时传入**Sources**和**TopLevelDomain**参数，如果您同时传入**Sources**和**TopLevelDomain**参数，**TopLevelDomain**将不生效。
     * @example `aliyundoc.com`
     */
    "TopLevelDomain"?: string;
}
