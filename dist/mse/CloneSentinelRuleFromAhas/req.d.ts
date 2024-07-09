export interface CloneSentinelRuleFromAhasRequest {
    /**
     * 命名空间
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名称
     * @example `spring-cloud-a`
     */
    "AppName"?: string;
    /**
     * AHAS侧命名空间（环境）。
     * @example `default`
     */
    "AhasNamespace": string;
    /**
     * AHAS侧是否为公网地域。
     * @example `false`
     */
    "IsAHASPublicRegion"?: boolean;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
