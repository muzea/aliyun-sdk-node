export interface ListCircuitBreakerRulesRequest {
    /**
     * 应用所属的微服务命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名称。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 查找包含接口关键字的防护规则。
     * @example `a`
     */
    "ResourceSearchKey"?: string;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522bXXXXX`
     */
    "AppId"?: string;
    /**
     * 查找指定接口的防护规则。
     * @example `/a`
     */
    "Resource"?: string;
    /**
     * 起始页。默认值为1。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小。默认值为6。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 返回结果显示的语言。取值：zh-CN（默认值）：中文，en-US：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
