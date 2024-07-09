export interface DescribeRecordStatisticsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 查询的开始时间，格式：**YYYY-MM-DD**。
     * 只能查询最近90天的记录，即：`StartDate >= Now - 90`。
     * 若查询时间小于等于7天，按照`维度：小时`返回数据，即：`StartDate <= Now - 7`。
     * 若查询时间大于7天，按照`维度：天`返回数据，即：`StartDate > Now - 7`。
     * @example `2019-07-04`
     */
    "StartDate": string;
    /**
     * 查询的结束时间，格式：**YYYY-MM-DD**。
     * 默认为查询当天的时间。
     * @example `2019-07-04`
     */
    "EndDate"?: string;
    /**
     * 主域名名称。
     * @example `dns-example.top`
     */
    "DomainName": string;
    /**
     * 指主机记录，如果要解析www.dns-exmaple.top，主机记录要填写www。
     * @example `www`
     */
    "Rr": string;
    /**
     * 域名类型，大小写不敏感。取值：
     * - PUBLIC：权威域名（默认值）
     * - CACHE：权威代理域名
     * @example `PUBLIC`
     */
    "DomainType"?: string;
}
