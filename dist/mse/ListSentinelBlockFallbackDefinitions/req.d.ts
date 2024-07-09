export interface ListSentinelBlockFallbackDefinitionsRequest {
    /**
     * 行为类型列表。
     */
    "ClassificationSet"?: number[];
    /**
     * 应用所属的微服务命空间。
     * @example `default`
     */
    "Namespace": string;
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
