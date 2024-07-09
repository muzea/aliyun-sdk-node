export interface BatchUpdateScdnDomainRequest {
    /**
     * 需要接入SCDN的域名
     * @example `example.com,aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 回源地址列表
     * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
     */
    "Sources"?: string;
    /**
     * 资源组ID
     * @example `rg-xxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 顶级接入域
     * @example `example.com`
     */
    "TopLevelDomain"?: string;
}
