export interface DescribeLivePushProxyLogRequest {
    /**
     * 推流域名。不支持多域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 分页大小。取值范围：\[1, 1000\]，默认值为300。
     * @example `300`
     */
    "PageSize"?: number;
    /**
     * 分页的页数，默认值为1。
     * @example `2`
     */
    "PageNumber"?: number;
    /**
     * 获取日志起始时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-09-20T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取日志结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-09-20T09:00:00Z`
     */
    "EndTime"?: string;
}
