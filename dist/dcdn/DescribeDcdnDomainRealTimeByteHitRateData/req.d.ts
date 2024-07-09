export interface DescribeDcdnDomainRealTimeByteHitRateDataRequest {
    /**
     * 域名，多个之间用逗号（,）隔开。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2017-12-10T21:00:00Z`
     */
    "EndTime"?: string;
}
