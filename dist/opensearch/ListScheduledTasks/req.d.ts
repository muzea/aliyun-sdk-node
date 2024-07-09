export interface ListScheduledTasksRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 定时任务类型
     * - wipe 数据清理
     * - fork 索引重建
     * - check-status 检查应用状态
     * - index 索引重建
     * @example `wipe`
     */
    "type"?: string;
    /**
     * 页码，默认 pageNumber = 1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认 pageSize = 10
     * @example `10`
     */
    "pageSize"?: number;
}
