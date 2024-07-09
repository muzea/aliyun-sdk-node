export interface DescribeLiveStreamRecordIndexFilesRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。与StartTime间隔时间不能超过4天。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime": string;
    /**
     * 当前页码。默认值为**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页大小。取值范围：**5~30**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 按创建时间排序。取值：
     * - **asc**（默认值）：升序。
     * - **desc**：降序。
     * @example `asc`
     */
    "Order"?: string;
}
