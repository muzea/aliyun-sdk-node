export interface GetApplicationListRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 应用名称。
     * @example `rest-container`
     */
    "AppName"?: string;
    /**
     * 应用id。
     * @example `hkhon1po62@c3df23522b*****`
     */
    "AppId"?: string;
    /**
     * 固定值，默认使用这个值
     * @example `edasmsc`
     */
    "Source"?: string;
    /**
     * 语言，如 Java、Go
     * @example `Java`
     */
    "Language"?: string;
    /**
     * 第几页
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每一页显示多少条数据
     * @example `10`
     */
    "PageSize": number;
    /**
     * 是否开始Switch
     * @example `true`
     */
    "SwitchEnable"?: boolean;
    /**
     * 是否开启Sentinel。
     * @example `true`
     */
    "SentinelEnable"?: boolean;
    /**
     * 应用所属的微服务命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
