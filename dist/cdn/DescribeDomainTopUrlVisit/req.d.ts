export interface DescribeDomainTopUrlVisitRequest {
    /**
     * 待查询的域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 开始获取数据的时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 查询某天的数据，建议传参格式为yyyy-MM-ddT16:00:00Z。
     * @example `2019-10-04T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于开始时间，并且结束时间和开始时间相差不超过7天。
     * @example `2019-10-04T16:00:00Z`
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
