export interface UpdateFlowRuleRequest {
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名称。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 规则的 ID。
     * @example `13`
     */
    "RuleId": number;
    /**
     * 流控规则阈值。
     * @example `30`
     */
    "Threshold"?: number;
    /**
     * 规则的启用状态。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 流控效果。
     * @example `0`
     */
    "ControlBehavior"?: number;
    /**
     * 超时时间，单位毫秒。当controlBehavior类型为（排队等待）时，需要设置该字段。
     * @example `500`
     */
    "MaxQueueingTimeMs"?: number;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522******`
     */
    "AppId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
