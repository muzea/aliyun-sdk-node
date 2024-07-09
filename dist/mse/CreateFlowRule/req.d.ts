export interface CreateFlowRuleRequest {
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 流控规则阈值。
     * @example `20`
     */
    "Threshold": number;
    /**
     * 规则的启用状态。
     * @example `false`
     */
    "Enable": boolean;
    /**
     * 接口资源名。
     * @example `/b`
     */
    "Resource": string;
    /**
     * 应用ID。
     * @example `ib09eblv6p@c3df23522******`
     */
    "AppId"?: string;
    /**
     * 流控效果。
     * @example `0`
     */
    "ControlBehavior"?: number;
    /**
     * 超时时间，流控效果为排队等待时需要设置，单位毫秒。
     * @example `10`
     */
    "MaxQueueingTimeMs"?: number;
    /**
     * 集群所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ResourceType"?: number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
