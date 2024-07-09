export interface UpdateDcdnIpaDomainRequest {
    /**
     * 需要接入全站加速IPA的域名，仅支持修改单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回源地址列表。
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
     * @example `example.edu`
     */
    "TopLevelDomain"?: string;
}
