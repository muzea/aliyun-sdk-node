export interface ListFlowRulesRequest {
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名称。
     * @example `xx-demo`
     */
    "AppName": string;
    /**
     * 搜索关键字。
     * @example `/a`
     */
    "ResourceSearchKey"?: string;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522******`
     */
    "AppId"?: string;
    /**
     * 资源名。
     * @example `/a`
     */
    "Resource"?: string;
    /**
     * 目标页号，默认为1
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 分页，每页 N 个。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
