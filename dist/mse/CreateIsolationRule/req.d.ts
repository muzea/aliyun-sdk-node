export interface CreateIsolationRuleRequest {
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
     * 隔离规则并发数阈值。
     * @example `3`
     */
    "Threshold": number;
    /**
     * 规则的启用状态。
     * @example `true`
     */
    "Enable": boolean;
    /**
     * 接口名称：适用该规则的应用资源。需要与控制台接口详情处接口名称一致。
     * @example `/a`
     */
    "Resource": string;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522bXXXXX`
     */
    "AppId"?: string;
    /**
     * 集群所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
