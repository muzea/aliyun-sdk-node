export interface UpdateGatewayCircuitBreakerRuleRequest {
    /**
     * 熔断规则ID。
     * @example `369`
     */
    "Id": number;
    /**
     * 网关ID。
     * @example `14407`
     */
    "GatewayId"?: number;
    /**
     * 网关唯一标识ID。
     * @example `gw-c9bc5afd61014165bd58f621b491****`
     */
    "GatewayUniqueId": string;
    /**
     * 路由ID。
     * @example `645`
     */
    "RouteId": number;
    /**
     * 路由名称。
     * @example `routeName`
     */
    "RouteName": string;
    /**
     * 阈值类型。
     * 0：慢调用类型。
     * 1：异常类型。
     * @example `0`
     */
    "Strategy": number;
    /**
     * 触发熔断百分比。
     * @example `10`
     */
    "TriggerRatio": number;
    /**
     * 熔断统计时长。
     * @example `11`
     */
    "StatDurationSec": number;
    /**
     * 熔断恢复时长。
     * @example `12`
     */
    "RecoveryTimeoutSec": number;
    /**
     * 触发熔断的最小请求数。
     * @example `10`
     */
    "MinRequestAmount": number;
    /**
     * 慢调用模式下慢调用阈值。
     * @example `10`
     */
    "MaxAllowedMs"?: number;
    /**
     * Web fallback行为类型。
     * 0：返回指定文本
     * 1：跳转到指定页面
     * @example `0`
     */
    "BehaviorType": number;
    /**
     * 编码类型。
     * 0：普通文本
     * 1：JSON
     * @example `0`
     */
    "BodyEncoding"?: number;
    /**
     * HTTP状态码。
     * @example `429`
     */
    "ResponseStatusCode"?: number;
    /**
     * HTTP返回文本。
     * @example `text`
     */
    "ResponseContentBody"?: string;
    /**
     * 跳转地址。
     * @example `www.******.com`
     */
    "ResponseRedirectUrl"?: string;
    /**
     * 是否开启。
     * 0：不开启。
     * 1：开启。
     * @example `0`
     */
    "Enable": number;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
