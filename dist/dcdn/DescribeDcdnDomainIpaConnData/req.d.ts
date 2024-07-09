export interface DescribeDcdnDomainIpaConnDataRequest {
    /**
     * IPA层应用加速域名，多个域名用英文逗号（,）分隔。
     * > 若参数为空，默认返回所有加速域名合并后数据。
     * @example `example1.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2015-02-21T07:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2015-02-22T7:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询结果分组方式。取值：
     * - domain：按加速域名分组。
     * - 参数为空（默认）：查询结果不分组。
     * @example `domain`
     */
    "SplitBy"?: string;
}
