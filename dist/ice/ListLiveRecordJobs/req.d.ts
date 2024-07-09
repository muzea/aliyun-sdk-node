export interface ListLiveRecordJobsRequest {
    /**
     * 搜索关键词，可以根据任务ID和名称搜索。
     * @example `ab0e3e76-1e9d-11ed-ba64-0c42a1b73d66`
     */
    "Keyword"?: string;
    /**
     * 查询开始时间。格式为yyyy-mm-ddthh:mm:ssz（UTC时间）。
     * @example `2022-07-15T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，与StartTime相差不超过30天。格式为yyyy-mm-ddthh:mm:ssz（UTC时间）。
     * @example `2022-07-11T08:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 任务状态。默认不过滤状态。
     * @example `started`
     */
    "Status"?: string;
    /**
     * 分页的页码。默认值：1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小。默认值：10。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 排序参数，默认按创建时间倒序。
     * @example `desc`
     */
    "SortBy"?: string;
}
