export interface DescribeEsExceptionDataRequest {
    /**
     * 获取数据的起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-02-17T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2021-02-18T20:00:00Z`
     */
    "EndTime": string;
    /**
     * 规则ID。您可以调用[DescribeCdnDomainConfigs](~~90924~~)接口获取规则ID。
     * @example `212896**`
     */
    "RuleId": string;
}
