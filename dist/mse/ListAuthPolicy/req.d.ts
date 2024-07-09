export interface ListAuthPolicyRequest {
    /**
     * 地域ID。
     * @example `cn-shanghai`
     */
    "Region": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber": string;
    /**
     * 每页显示条数。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 来源。
     * @example `edasmsc`
     */
    "Source": string;
    /**
     * 协议类型。取值：
     * - **SPRING_CLOUD**。
     * - **DUBBO**。
     * - **istio**。
     * @example `SPRING_CLOUD`
     */
    "Protocol"?: string;
    /**
     * 鉴权规则名称。
     * @example `auto-rule-**`
     */
    "Name"?: string;
    /**
     * 应用ID。
     * @example `jgy4cadmqo@***`
     */
    "AppId"?: string;
    /**
     * MSE命名空间名。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 返回结果显示的语言。取值：zh-CN（默认值）：中文，en-US：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
