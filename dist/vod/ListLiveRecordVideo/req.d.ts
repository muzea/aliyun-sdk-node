export interface ListLiveRecordVideoRequest {
    /**
     * 录制时使用的直播流名称。
     * @example `live-test`
     */
    "StreamName"?: string;
    /**
     * 录制时使用的直播域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 录制时使用的App名称。
     * @example `testApp`
     */
    "AppName"?: string;
    /**
     * 页号。默认值：**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页长。最大值：**100**，默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 结果排序。取值：
     * - **CreationTime:Desc**（默认值）：按创建时间倒序。
     * - **CreationTime:Asc**：按创建时间升序。
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
    /**
     * 录制操作（开始直播节目录制）的开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-01-11T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 录制操作（开始直播节目录制）的结束时间。需晚于开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-01-11T13:00:00Z`
     */
    "EndTime"?: string;
}
