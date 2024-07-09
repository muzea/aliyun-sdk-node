export interface DescribeDcdnDomainTopReferVisitRequest {
    /**
     * 加速域名信息，只支持一个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 开始获取数据的时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 查询某天的数据，建议传yyyy-MM-ddT16:00:00Z。
     * 默认读取过去24小时数据。
     * @example `2018-10-03T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 排序方式。取值：
     * - **traf**：流量。
     * - **pv**：访问次数。
     * 默认取值为**pv**。
     * @example `pv`
     */
    "SortBy"?: string;
}
