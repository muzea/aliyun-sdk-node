export interface AddScdnDomainRequest {
    /**
     * 接入CDN的加速域名。支持泛域名，以点号（.）开头。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 资源组ID。不传该参数时，自动补全为默认资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
    /**
     * 回源地址列表。
     * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]`
     */
    "Sources": string;
    /**
     * 健康检测URL。
     * @example `www.yourdomain.com/test.html`
     */
    "CheckUrl"?: string;
    /**
     * 加速区域。取值：
     * - **domestic**（默认值）：仅中国内地。
     * - **overseas**：全球（不包含中国内地）。
     * - **global**：全球。
     * > 国际用户、国内L3及以上用户设置有效。
     * @example `overseas`
     */
    "Scope"?: string;
}
