export interface DescribeDcdnDomainHitRateDataRequest {
    /**
     * 加速域名，仅支持单个域名查询。
     * 不填默认查询所有域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-03-02T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2018-03-02T15:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度，单位为秒。
     * 根据单次查询的最大时间跨度不同，该参数支持300（5分钟）、3600（1小时）和86400（1天）取值，具体请参见上方的**支持查询的时间粒度**。
     * @example `300`
     */
    "Interval"?: string;
}
