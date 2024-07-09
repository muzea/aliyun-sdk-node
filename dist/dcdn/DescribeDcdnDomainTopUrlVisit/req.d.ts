export interface DescribeDcdnDomainTopUrlVisitRequest {
    /**
     * 加速域名，只支持传入一个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 开始获取数据的时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * 如果需要查询某天的数据，建议传入：YYYY-MM-DDT16:00:00Z。
     * > 不传该参数默认读取过去24小时的数据。
     * @example `2018-10-03T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 排序方式。取值：
     * - **traf**：流量。
     * - **pv**：访问次数。
     * 默认值为**pv**。
     * @example `pv`
     */
    "SortBy"?: string;
}
