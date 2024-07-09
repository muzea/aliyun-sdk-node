export interface DescribeDashboardRequest {
    /**
     * 产品名称
     * @example `mqc`
     */
    "ServiceName"?: string;
    /**
     * 指定应用的appkey，唯一标识应用。
     * @example `29201799`
     */
    "AppKey"?: string;
    /**
     * 应用类型，取值如下：1：ios2：android8：魔笔网页端9：魔笔移动端
     * @example `1`
     */
    "AppType"?: number;
    /**
     * 应用版本，默认为最新版。
     * @example `4.8`
     */
    "AppVersion"?: string;
    /**
     * 无用字段。
     * @example ` deprecated`
     */
    "Keyword"?: string;
    /**
     * 查询开始时间，精确到毫秒的unix时间戳。
     * @example `1681369984564`
     */
    "StartTime"?: number;
    /**
     * 获取数据结束时间点。
     * @example `1681985390256`
     */
    "EndTime"?: number;
    /**
     * 仅serviceName为 apm 时生效，子查询：查询app版本、查询性能监控概览，查询崩溃概览
     * @example `queryAppVersions`
     */
    "ProxyAction"?: string;
}
