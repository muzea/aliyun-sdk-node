export interface DescribePlayTopVideosRequest {
    /**
     * 指定查询的日期。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2016-06-29T13:00:00Z`
     */
    "BizDate": string;
    /**
     * 分页的页码。默认值：**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小，每页显示的条数。默认值为**100**，最大值为**1000**。
     * @example `100`
     */
    "PageSize"?: number;
}
