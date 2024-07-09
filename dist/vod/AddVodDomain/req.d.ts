export interface AddVodDomainRequest {
    /**
     * 需要接入点播的加速域名。支持泛域名，以英文句号（.）开头，如：.example.com。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 回源地址列表。参数详情，请参见下表**Sources**。
     * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
     */
    "Sources": string;
    /**
     * 健康检测URL。
     * @example `www.example.com/test.html`
     */
    "CheckUrl"?: string;
    /**
     * 国际用户、中国内地L3及以上用户设置有效。  取值范围：
     * - **domestic**（默认）：中国大陆。
     * - **overseas**：港澳台及海外。
     * - **global**：全球加速。
     * @example `domestic`
     */
    "Scope"?: string;
    /**
     * 顶级接入域。
     * @example `example.com`
     */
    "TopLevelDomain"?: string;
}
