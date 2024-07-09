export interface DescribeRealtimeDeliveryAccRequest {
    /**
     * 获取日志起始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2016-10-20T04:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取日志结束时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2016-10-20T05:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度，单位：秒。根据您指定**StartTime**和**EndTime**两者的时间跨度，该参数取值如下：
     * - 3天以内（不包含3天整）支持**300**、**3600**、 **86400**，如果不传该参数，默认值为**300**。
     * - 3-31天（不包含31天整）支持**3600**和**86400**，如果不传该参数，默认值为**3600**。
     * - 31天及以上支持**86400**，如果不传该参数，默认值为**86400**。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 实时日志投递的Project。默认查询所有Project。
     * @example `Project`
     */
    "Project"?: string;
    /**
     * 实时日志投递的Logstore。默认查询所有Logstore。
     * @example `LogStore`
     */
    "LogStore"?: string;
}
