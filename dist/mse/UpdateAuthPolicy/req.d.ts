export interface UpdateAuthPolicyRequest {
    /**
     * 规则名称。
     * @example `demo-test`
     */
    "Name"?: string;
    /**
     * 应用接入来源。
     * @example `edasmsc`
     */
    "Source"?: string;
    /**
     * 规则ID。
     * @example `432`
     */
    "Id": string;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 是否开启。
     * @example `true`
     */
    "Enable"?: string;
    /**
     * 应用ID。
     * @example `abcde@12345`
     */
    "AppId"?: string;
    /**
     * 协议类型。取值：
     * - **SPRING_CLOUD**。
     * - **DUBBO**。
     * - **istio**。
     * @example `SPRING_CLOUD`
     */
    "Protocol"?: string;
    /**
     * 服务鉴权规则内容。
     * @example `[{\"all\":true,\"appIds\":[\"f6xqzbao96@4adfaf3c92c947a\"],\"black\":false}]`
     */
    "AuthRule"?: string;
    /**
     * k8s集群的命名空间ID。
     * @example `c19c6c500e1ff4d7abc7bed9b8236***`
     */
    "K8sNamespace"?: string;
    /**
     * 返回结果显示的语言。取值：zh-CN（默认值）：中文，en-US：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
