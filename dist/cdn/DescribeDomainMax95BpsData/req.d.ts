export interface DescribeDomainMax95BpsDataRequest {
    /**
     * 需要查询的加速域名。若参数为空，默认返回所有加速域名合并后的数据。
     * > 不支持批量域名查询。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 获取数据起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-21T10:00:00Z`
     */
    "TimePoint"?: string;
    /**
     * 95带宽峰值周期，默认值为**day**。取值：
     * - **day**：按日查询95峰值。
     * - **month**：按月查询95峰值。
     * @example `month`
     */
    "Cycle"?: string;
}
