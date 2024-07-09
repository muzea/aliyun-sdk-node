export interface DescribeDcdnWafLogsRequest {
    /**
     * 域名，只支持单个查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 查询日志起始时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询日志结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 分页大小，默认**300**，取值：**1~1000**。
     * @example `300`
     */
    "PageSize"?: number;
    /**
     * 查询页数，取值范围：大于0的任意整数。
     * @example `1`
     */
    "PageNumber"?: number;
}
