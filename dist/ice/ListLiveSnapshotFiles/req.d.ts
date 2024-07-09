export interface ListLiveSnapshotFilesRequest {
    /**
     * 截图任务ID。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    "JobId": string;
    /**
     * 开始时间。UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-02-02T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。UTC时间，格式：yyyy-MM-ddTHH:mm:ssZ。
     * - EndTime和StartTime之间的间隔不能超过1天。
     * @example `2022-02-02T23:59:59Z`
     */
    "EndTime": string;
    /**
     * 每次获取数量，[1, 100]，默认为10。
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 排序，默认为asc。
     * @example `desc`
     */
    "SortBy"?: string;
}
