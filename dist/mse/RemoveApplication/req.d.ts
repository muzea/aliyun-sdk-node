export interface RemoveApplicationRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 微服务命名空间。
     * @example `prod`
     */
    "Namespace"?: string;
    /**
     * 要删除的应用名字。
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * 要删除的应用id。
     * @example `abcde@12345`
     */
    "AppId"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
