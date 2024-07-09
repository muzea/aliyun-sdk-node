export interface DescribeLiveStreamSnapshotInfoRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
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
     * 结束时间。EndTime和StartTime之间的间隔不能超过**1**天。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime": string;
    /**
     * 一次调用获取的数量。取值范围：**1~100**， 默认值：**10**。
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 排序。取值：
     * - **asc**（默认值）：升序。
     * - **desc**：降序。
     * @example `asc`
     */
    "Order"?: string;
}
