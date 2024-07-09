export interface UpdateVodDomainRequest {
    /**
     * 点播加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回源地址列表。参数详情，请参见下表**Sources**。
     * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
     */
    "Sources"?: string;
    /**
     * 顶级接入域。
     * @example `example.com`
     */
    "TopLevelDomain"?: string;
}
