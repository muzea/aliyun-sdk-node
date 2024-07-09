export interface DeleteIsolationRulesRequest {
    /**
     * 应用所属的微服务命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 待删除的规则ID列表。
     */
    "Ids"?: number[];
    /**
     * 应用名称。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
