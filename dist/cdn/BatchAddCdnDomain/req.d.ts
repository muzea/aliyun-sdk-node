export interface BatchAddCdnDomainRequest {
    /**
     * 加速域名的业务类型。取值：
     * - **web**：图片小文件。
     * - **download**：大文件下载。
     * - **video**：视音频点播。
     * @example `web`
     */
    "CdnType": string;
    /**
     * 需要接入CDN的加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com,aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 资源组ID，不传时，自动补全默认资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
    /**
     * 回源地址列表。
     * @example `[
          {
                "content": "192.0.2.0",
                "type": "ipaddr",
                "priority": "20",
                "port": 80,
                "weight": "15"
          }
    ]`
     */
    "Sources": string;
    /**
     * 检测URL。
     * @example `url`
     */
    "CheckUrl"?: string;
    /**
     * 加速区域。取值：
     * - **domestic**：仅中国内地。
     * - **overseas**：全球（不包含中国内地）。
     * - **global**：全球。
     * @example `domestic`
     */
    "Scope"?: string;
    /**
     * 顶级接入域。
     * @example `example.com`
     */
    "TopLevelDomain"?: string;
}
