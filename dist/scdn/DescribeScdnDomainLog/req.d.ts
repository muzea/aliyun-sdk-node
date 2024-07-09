export interface DescribeScdnDomainLogRequest {
    /**
     * 待查询的加速域名，只支持查询单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 分页大小，默认**300**，最大**1000**，取值：**1~1000**之前的任意整数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 取得第几页，取值范围为大于**1**的任意整数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 获取日志起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。
     * @example `2016-10-20T04:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取日志起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。
     * > 结束时间需晚于起始时间。
     * @example `2016-10-20T04:10:00Z`
     */
    "EndTime"?: string;
}
