export interface ListLiveSnapshotJobsRequest {
    /**
     * 查询开始时间。UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * - 默认为7天前。
     * - StartTime与EndTime间隔不能超过30天。
     * @example `2022-02-02T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间。UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * - 默认为StartTime+7天。
     * - StartTime与EndTime间隔不能超过30天。
     * @example `2022-02-02T23:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 搜索关键词，任务ID/名称，名称支持模糊搜索。
     * - 最大长度为128。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    "SearchKeyWord"?: string;
    /**
     * 任务状态过滤，默认查询全部。
     */
    "Status"?: string;
    /**
     * 页码，[1, n)，默认是1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页宽，[1, 100]，默认是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序，按CreateTime排序，默认是desc。
     * @example `desc`
     */
    "SortBy"?: string;
}
