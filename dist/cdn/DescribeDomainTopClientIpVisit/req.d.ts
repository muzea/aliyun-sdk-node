export interface DescribeDomainTopClientIpVisitRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔。
     * 默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 地域英文名，多个用半角逗号（,）分隔，默认查询全部地域。
     * 通过[DescribeCdnRegionAndIsp](~~91077~~)获得。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
    /**
     * 获取数据起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-09-30T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2019-10-01T16:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 排序方式。取值：
     * - **traf**（默认值）：流量。
     * - **acc**：访问次数。
     * @example `traf`
     */
    "SortBy"?: string;
    /**
     * 返回数据条目，最大值为100。
     * 默认为20，即返回TOP 20的数据条目。
     * @example `20`
     */
    "Limit"?: string;
}
