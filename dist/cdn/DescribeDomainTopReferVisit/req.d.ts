export interface DescribeDomainTopReferVisitRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-12-21T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间大于起始时间。
     * @example `2019-12-22T12:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 排序方式。取值：
     * - **traf**：流量。
     * - **pv**（默认值）：访问次数。
     * @example `pv`
     */
    "SortBy"?: string;
}
