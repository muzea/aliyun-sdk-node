export interface DescribeDcdnWafUsageDataRequest {
    /**
     * 查询域名。若参数为空，默认返回所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-09-30T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * >结束时间需大于起始时间。
     * @example `2018-10-01T16:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度，单位为秒。
     * 根据单次查询的最大时间跨度不同，该参数支持300（5分钟）、3600（1小时）和86400（1天）取值。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 查询结果分组方式。取值：
     * - domain：按加速域名分组。
     * - 参数为空（默认）：查询结果不分组。
     * @example `domain`
     */
    "SplitBy"?: string;
}
