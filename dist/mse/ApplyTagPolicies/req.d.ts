export interface ApplyTagPoliciesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 应用所属的MSE命名空间
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用名字
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * 应用ID。
     * @example `h5pohqu3gd@xxx`
     */
    "AppId": string;
    /**
     * 路由规则。
     */
    "Rules"?: any;
    /**
     * 命名空间ID，可以不填。
     * @example `12233****`
     */
    "NamespaceId"?: string;
    /**
     * 是否开启。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
