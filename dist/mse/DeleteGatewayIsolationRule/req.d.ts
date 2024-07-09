export interface DeleteGatewayIsolationRuleRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-e2d226bba4b2445c9e29fa7f8216****`
     */
    "GatewayUniqueId": string;
    /**
     * 路由ID。
     * @example `11151`
     */
    "RouteId": number;
    /**
     * 并发规则ID。
     * @example `1`
     */
    "RuleId": number;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
