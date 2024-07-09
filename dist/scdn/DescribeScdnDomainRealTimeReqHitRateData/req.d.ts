export interface DescribeScdnDomainRealTimeReqHitRateDataRequest {
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 起始时间，日期格式按照ISO8601表示法，并使用UTC时间。
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间。
     * @example `2017-12-10T21:01:00Z`
     */
    "EndTime"?: string;
}
