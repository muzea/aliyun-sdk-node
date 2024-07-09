export interface DescribeAppRecordingFilesRequest {
    /**
     * APP ID。
     * @example `testappid`
     */
    "AppId": string;
    /**
     * 频道ID。
     * @example `311`
     */
    "ChannelId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询范围，录制任务开始时间开区间，单位：ms。如果不传，默认查询3天内，最长查询过去一年的录制文件。
     * @example `1712376032000`
     */
    "StartTs"?: number;
    /**
     * 查询范围，录制任务开始时间闭区间，单位：ms。
     * @example `1712376532000`
     */
    "EndTs"?: number;
    /**
     * 录制任务TaskId列表。
     */
    "TaskIds"?: string[];
}
