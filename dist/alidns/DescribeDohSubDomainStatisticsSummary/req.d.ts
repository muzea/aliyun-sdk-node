export interface DescribeDohSubDomainStatisticsSummaryRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     *
     * 查询的开始时间，格式：YYYY-MM-DD。
     * 只能查询最近90天的记录，即：`StartDate >= Now - 90`。
     * @example `2019-07-04	`
     */
    "StartDate"?: string;
    /**
     *
     * 查询的结束时间，格式：YYYY-MM-DD。
     * 默认为查询当天的时间。
     * @example `2019-07-04	`
     */
    "EndDate"?: string;
    /**
     * 子域名。
     * @example `www.example.com`
     */
    "SubDomain"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName"?: string;
}
