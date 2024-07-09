export interface DescribeVodDomainLogRequest {
    /**
     * 点播加速域名。
     * > 仅支持单个查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 分页大小，每页显示条数。
     * - 默认值：**300**
     * - 最大值：**1000**
     * @example `300`
     */
    "PageSize"?: number;
    /**
     * 页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 获取日志起始时间点。格式为：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2016-10-20T04:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，需晚于起始时间。起止时间和结束时间，间隔不超过一年。格式为：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2016-10-20T05:00:00Z`
     */
    "EndTime"?: string;
}
