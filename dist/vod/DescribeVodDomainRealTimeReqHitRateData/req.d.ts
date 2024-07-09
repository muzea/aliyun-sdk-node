export interface DescribeVodDomainRealTimeReqHitRateDataRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔，一次最多支持100个域名查询。查询多个域名时，返回的数据为各域名合并后的数据值。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2024-01-02T11:23:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为：yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2024-01-02T11:26:00Z`
     */
    "EndTime"?: string;
}
