export interface UpdateScdnDomainRequest {
    /**
     * 需要接入SCDN的域名
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回源地址列表
     * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
     */
    "Sources"?: string;
    /**
     * 资源组ID
     * @example `rg-acfmyuji4b6r4ry`
     */
    "ResourceGroupId"?: string;
}
