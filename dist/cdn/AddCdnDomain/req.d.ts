export interface AddCdnDomainRequest {
    /**
     * 加速域名的业务类型。取值：
     * - **web**：图片小文件。
     * - **download**：大文件下载。
     * - **video**：视音频点播。
     * @example `web`
     */
    "CdnType": string;
    /**
     * 需要接入CDN的加速域名。
     * 支持泛域名，以英文句号（.）开头，例如.example.com。
     * @example `.example.com`
     */
    "DomainName": string;
    /**
     * 资源组ID。
     * 不传该参数时，系统自动补全为默认资源组ID。
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
     * 健康检测URL。
     * @example `www.example.com/test.html`
     */
    "CheckUrl"?: string;
    /**
     * 加速区域。取值：
     * - **domestic**（默认值）：仅中国内地。
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
    /**
     * 标签信息列表。最大可填入20个标签信息。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value`
         */
        Value: string;
    }[];
}
