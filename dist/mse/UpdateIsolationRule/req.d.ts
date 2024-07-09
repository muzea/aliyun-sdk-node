export interface UpdateIsolationRuleRequest {
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
     * 规则ID。
     * @example `1`
     */
    "RuleId": number;
    /**
     * 隔离规则并发数阈值。
     * @example `3`
     */
    "Threshold"?: number;
    /**
     * 规则的启用状态。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522******`
     */
    "AppId"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
