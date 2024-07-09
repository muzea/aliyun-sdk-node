export interface GetServiceListPageRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * MSE命名空间名字
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用名字。
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * 服务类型。
     * @example `springCloud`
     */
    "ServiceType"?: string;
    /**
     * 应用id。
     * @example `dez4xxxxx@f3f75ed8ffxxxxx`
     */
    "AppId"?: string;
    /**
     * 服务名字。
     * @example `sc-A`
     */
    "ServiceName"?: string;
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的ip地址。
     * @example `223.5.5.5`
     */
    "Ip"?: string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
