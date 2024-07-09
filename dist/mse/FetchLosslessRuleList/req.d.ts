export interface FetchLosslessRuleListRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 应用名。
     * @example `spring-boot-sample`
     */
    "AppName"?: string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用ID。
     * @example `hyaziyb6sc@86827c61f5ed***`
     */
    "AppId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 返回信息的语言类型：
     * * zh：中文。
     * * en：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
