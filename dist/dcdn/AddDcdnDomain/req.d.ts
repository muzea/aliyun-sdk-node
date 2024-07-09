export interface AddDcdnDomainRequest {
    /**
     * 待添加的加速域名，仅支持添加单个域名。
     * 支持添加泛域名，以点号（.）开头，例如.example.com。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 资源组ID。不传该参数时，系统自动补全默认资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
    /**
     * 回源地址列表。
     * @example `[{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80}]`
     */
    "Sources"?: string;
    /**
     * 健康检测URL。
     * @example `www.example.com/test.html`
     */
    "CheckUrl"?: string;
    /**
     * 加速区域。取值：
     * - **domestic**：仅中国内地。
     * - **overseas**：全球（不包含中国内地）。
     * - **global**：全球。
     * 默认取值为**domestic**。
     * @example `domestic`
     */
    "Scope"?: string;
    /**
     * 顶级接入域。
     * @example `yourTopLevelDomain`
     */
    "TopLevelDomain"?: string;
    /**
     * 标签信息。最多20个标签。
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
    /**
     * 加速场景。支持：
     * - **apiscene**：API加速。
     * - **webservicescene**：网站业务加速。
     * - **staticscene**：视频、图文类加速。
     * - **（空）**：没有场景。
     * @example `apiscene`
     */
    "Scene"?: string;
    /**
     * 计算服务类型。取值：
     * - **routine**：程序。
     * - **image**：镜像。
     * - **cloudFunction**：函数。
     * @example `routine`
     */
    "FunctionType"?: string;
}
