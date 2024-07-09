export interface GetServiceListRequest {
    /**
     * 地域。
     * @example `cn-zhangjiakou`
     */
    "Region"?: string;
    /**
     * 框架类型。
     * @example `dubbo`
     */
    "ServiceType"?: string;
    /**
     * 应用ID。
     * @example `xxx@xxx`
     */
    "AppId": string;
    /**
     * 服务名。
     * @example `com.alibaba.xxx`
     */
    "ServiceName"?: string;
    /**
     * IP地址。
     * @example `127.0.0.1`
     */
    "Ip"?: string;
    /**
     * 语言类型。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
