export interface DescribeLiveRealtimeDeliveryAccRequest {
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * 结束时间需大于起始时间。起止时间和结束时间，间隔不超过一年。
     * @example `2015-12-10T21:05:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度。单位：秒（s）。取值：
     * - **300**。
     * - **3600**。
     * - **86400**。
     * 不传或传的值不支持，且时间跨度不超过3天时，默认值300秒。超过3天默认值3600秒。超过30天默认值86400秒。
     * @example `3600`
     */
    "Interval"?: string;
    /**
     * 实时日志投递的Project。
     * @example `project_example`
     */
    "Project"?: string;
    /**
     * 实时日志投递的Logstore。
     * @example `logstore_example`
     */
    "LogStore"?: string;
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName"?: string;
}
