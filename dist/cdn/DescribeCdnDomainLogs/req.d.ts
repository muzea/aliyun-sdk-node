export interface DescribeCdnDomainLogsRequest {
    /**
     * 域名，只支持单个查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 分页大小，默认**300**，最大**1000**，取值：**1**~**1000**。
     * @example `300`
     */
    "PageSize"?: number;
    /**
     * 取得第几页，取值范围：大于**1**的任意整数。
     * @example `2`
     */
    "PageNumber"?: number;
    /**
     * 获取日志起始时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取日志结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需晚于起始时间。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime"?: string;
}
