export interface GetApplicationInstanceListRequest {
    /**
     * 应用所属的MSE命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用名字。
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * 应用Id。
     * @example `abcde@12345`
     */
    "AppId"?: string;
    /**
     * 节点标签。
     * @example `gray`
     */
    "Tag"?: string;
    /**
     * 第几页。从1开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页大小。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 所在地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
