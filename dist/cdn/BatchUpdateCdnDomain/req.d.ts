export interface BatchUpdateCdnDomainRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）隔开。
     * @example `example.com,example.org`
     */
    "DomainName": string;
    /**
     * 回源地址列表。
     * > 不支持同时传入**Sources**和**TopLevelDomain**参数，如果您同时传入**Sources**和**TopLevelDomain**参数，**TopLevelDomain**将不生效。
     * @example `[{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
     */
    "Sources"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
    /**
     * 顶级接入域。
     * > 不支持同时传入**Sources**和**TopLevelDomain**参数，如果您同时传入**Sources**和**TopLevelDomain**参数，**TopLevelDomain**将不生效。
     * @example `example.com`
     */
    "TopLevelDomain"?: string;
}
