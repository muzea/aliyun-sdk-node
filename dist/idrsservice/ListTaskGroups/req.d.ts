export interface ListTaskGroupsRequest {
    /**
     * 页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 状态：runnable，completed
     * @example `runnable`
     */
    "Status"?: string;
}
