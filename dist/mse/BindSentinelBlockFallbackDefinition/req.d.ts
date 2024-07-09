export interface BindSentinelBlockFallbackDefinitionRequest {
    /**
     * 应用名称。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 应用所属的微服务命名空间。
     * @example `prod`
     */
    "Namespace": string;
    /**
     * 行为ID，其中0表示默认行为。
     * @example `21`
     */
    "FallbackId": number;
    /**
     * 目标规则类型。
     * @example `1`
     */
    "TargetType": string;
    /**
     * 接口名称：适用该规则的应用资源。需要与控制台接口详情处接口名称一致。
     * @example `/a`
     */
    "Resource": string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
