export interface DescribeRecordFilesRequest {
    /**
     * 录制任务ID。
     * @example `yourTaskId`
     */
    "TaskIds"?: string[];
    /**
     * 应用ID。仅支持传单个ID，您可以在控制台创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 频道ID。仅支持传单个ID。
     * @example `yourChannelId`
     */
    "ChannelId"?: string;
    /**
     * 每页显示个数，默认为**10**，每页最多显示**100**个数据。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 第几页，默认查询第1页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2020-11-01T17:36:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2020-11-02T17:36:00Z`
     */
    "EndTime"?: string;
}
