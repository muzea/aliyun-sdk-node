export interface ListTasksRequest {
    /**
     * 页号
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 任务组 ID
     * @example `1`
     */
    "TaskGroupId"?: string;
}
