export interface ListLiveRecordFilesRequest {
    /**
     * 结束时间。与StartTime间隔时间不能超过4天。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 开始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2017-12-21T08:00:01Z`
     */
    "StartTime"?: string;
    /**
     * 任务ID列表。
     */
    "JobIds"?: string[];
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小。取值范围：5~30，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序。取值：
     * asc（默认值）：升序。
     * desc：降序。
     * @example `asc`
     */
    "SortBy"?: string;
    /**
     * 录制文件格式。取值：
     * m3u8， flv， mp4
     * @example `m3u8`
     */
    "RecordFormat"?: string;
}
