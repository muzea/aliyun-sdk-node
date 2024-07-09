export interface DescribeDomainRegionDataRequest {
    /**
     * 加速域名，多个域名用英文逗号（,）分隔。
     * 默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2015-12-05T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2015-12-07T12:00:00Z`
     */
    "EndTime"?: string;
}
