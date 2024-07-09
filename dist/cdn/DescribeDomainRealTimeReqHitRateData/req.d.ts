export interface DescribeDomainRealTimeReqHitRateDataRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔，一次最多支持100个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-01-02T11:23:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2018-01-02T11:26:00Z`
     */
    "EndTime"?: string;
}
