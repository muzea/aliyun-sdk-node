export interface DescribeDomainSrcTopUrlVisitRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 如果不指定StartTime，默认读取前一天的数据。
     * @example `2018-10-03T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间，并且结束时间和开始时间相差不超过7天。
     * @example `2018-10-03T20:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 排序方式，默认值为**pv**。取值：
     * - **traf**：流量。
     * - **pv**：访问量。
     * @example `pv`
     */
    "SortBy"?: string;
}
