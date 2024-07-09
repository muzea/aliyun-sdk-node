export interface DescribeDomainMultiUsageDataRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔。
     * > - 单次查询最多可添加30个域名。
     * > - 若参数为空，默认返回所有加速域名分组数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点。日期格式按照ISO 8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。日期格式按照ISO 8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2017-12-10T21:00:00Z`
     */
    "EndTime"?: string;
}
