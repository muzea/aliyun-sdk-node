export interface DescribeLiveDomainLogRequest {
    /**
     * 播流域名或推流域名。
     * 只支持单个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 分页大小。取值：
     * - **1~1000**之间的任意整数。
     * - 默认值为**300**。
     * - 最大值为**1000**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页码。
     * >若不指定PageNumber查询，将默认返回第一页数据。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-10-20T04:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * 结束时间需大于起始时间。起始时间和结束时间，间隔不超过31天。
     * @example `2016-10-20T05:00:00Z`
     */
    "EndTime"?: string;
}
