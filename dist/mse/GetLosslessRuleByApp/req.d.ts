export interface GetLosslessRuleByAppRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名。
     * @example `example-app`
     */
    "AppName"?: string;
    /**
     * MSE命名空间名。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522baa***`
     */
    "AppId"?: string;
    /**
     * 返回信息的语言类型：
     * * zh：中文。
     * * en：英文。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
