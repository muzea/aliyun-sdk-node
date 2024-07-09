export interface DescribeDcdnDomainRealTimeReqHitRateDataRequest {
    /**
     * 加速域名，多个用英文逗号（,）隔开。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 起始时间，日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2019-12-10T20:03:00Z`
     */
    "EndTime"?: string;
}
