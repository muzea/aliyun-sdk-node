export interface BatchAddDcdnDomainRequest {
    /**
     * DCDN加速域名，一个用户最多添加20个域名。多个域名使用半角逗号（,）分隔。
     * @example `example.com,example.org`
     */
    "DomainName": string;
    /**
     * 资源组ID，不传时，自动补全默认资源组ID。
     * @example `testID`
     */
    "ResourceGroupId"?: string;
    /**
     * 回源地址列表。
     * @example `[{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
     */
    "Sources": string;
    /**
     * 健康检测URL。
     * @example `www.example.com/test.html`
     */
    "CheckUrl"?: string;
    /**
     * 加速区域。取值：
     * - domestic（默认值）：仅中国内地。
     * - overseas：全球（不包含中国内地）。
     * - global：全球。
     * @example `domestic`
     */
    "Scope"?: string;
    /**
     * 顶级接入域。
     * @example `example.com`
     */
    "TopLevelDomain"?: string;
}
