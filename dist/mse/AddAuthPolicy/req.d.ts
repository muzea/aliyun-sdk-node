export interface AddAuthPolicyRequest {
    /**
     * 规则名称。
     * @example `test`
     */
    "Name": string;
    /**
     * 来源。可选值为：edasmsc。
     * @example `edasmsc`
     */
    "Source": string;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 鉴权规则的启用状态。取值：
     * - `true`：启用。
     * - `false`：禁用。
     * @example `true`
     */
    "Enable": string;
    /**
     * 应用ID。
     * @example `e9clba2xlc@***`
     */
    "AppId"?: string;
    /**
     * 协议类型。取值：
     * - **SPRING_CLOUD**。
     * - **DUBBO**。
     * - **istio**。
     * @example `SPRING_CLOUD`
     */
    "Protocol": string;
    /**
     * 服务鉴权规则内容。
     * @example `[{"all":true,"black":false,"appIds":["dez4qt7weh@***"]}]`
     */
    "AuthRule": string;
    /**
     * 应用所属的MSE命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 规则类型。
     * - 0， 按照应用维度。
     * - 1，按照命名空间维度。
     * @example `0`
     */
    "AuthType"?: number;
    /**
     * k8s集群的命名空间ID。
     * @example `c19c6c500e1ff4d7abc7***`
     */
    "K8sNamespace"?: string;
    /**
     * 返回结果显示的语言。取值：zh-CN（默认值）：中文，en-US：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
