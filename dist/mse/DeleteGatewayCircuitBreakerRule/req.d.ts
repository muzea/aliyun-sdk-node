export interface DeleteGatewayCircuitBreakerRuleRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-1cef5440bf2d484db419fb264d4f****`
     */
    "GatewayUniqueId": string;
    /**
     * 路由ID。
     * @example `11151`
     */
    "RouteId": number;
    /**
     * 熔断规则ID。
     * @example `1`
     */
    "RuleId": number;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
