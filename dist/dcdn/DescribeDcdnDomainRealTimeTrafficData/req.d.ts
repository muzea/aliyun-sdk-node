export interface DescribeDcdnDomainRealTimeTrafficDataRequest {
    /**
     * 加速域名。支持批量域名查询，多个域名使用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 如果您不指定StartTime和EndTime时，默认读取过去1小时的数据；指定StartTime和EndTime时，按指定的起止时间查询。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。结束时间需大于起始时间。
     * > 如果您不指定StartTime和EndTime时，默认读取过去1小时的数据；指定StartTime和EndTime时，按指定的起止时间查询。
     * @example `2015-12-10T20:01:00Z`
     */
    "EndTime"?: string;
}
