export interface UpdateDcdnDomainRequest {
    /**
     * 加速域名，仅支持修改单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回源地址列表。
     * @example `[{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80}]`
     */
    "Sources"?: string;
    /**
     * 资源组ID。
     * @example `rg-xxxxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 顶级接入域。
     * @example `yourTopLevelDomain  `
     */
    "TopLevelDomain"?: string;
}
