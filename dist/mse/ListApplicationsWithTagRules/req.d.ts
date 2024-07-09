export interface ListApplicationsWithTagRulesRequest {
    /**
     * 分页，第 N 页。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页，每页 N 个。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 数据来源，默认edasmsc。
     * @example `edasmsc`
     */
    "Source"?: string;
    /**
     * 应用ID。
     * @example `xjpc0h9h4d@xxx`
     */
    "AppId"?: string;
    /**
     * 应用所属的MSE命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 应用名称。
     * @example `test`
     */
    "AppName": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
