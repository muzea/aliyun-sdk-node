export interface DescribeDcdnDomainLogRequest {
    /**
     * 待查询的加速域名，只支持查询单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 分页大小。
     * 取值：**1**~**1000**，默认值：**300**，最大值：**1000**。
     * @example `300`
     */
    "PageSize"?: number;
    /**
     * 取得第几页，取值范围：大于**1**的任意整数。
     * 默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 获取日志起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-11-07T17:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取日志结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2021-11-07T18:00:00Z`
     */
    "EndTime"?: string;
}
