export interface DescribePlayUserAvgRequest {
    /**
     * 指定查询的起始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2016-06-29T13:00:00Z`
     */
    "StartTime": string;
    /**
     * 指定查询的结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 结束时间需大于起始时间，且与起始时间的最大跨度为180天。
     * @example `2016-06-30T13:00:00Z`
     */
    "EndTime": string;
}
