export interface ListScheduledSQLsResponse {
    /**
     * Project下总的定时SQL任务数量
     * @example `80`
     */
    total: number;
    /**
     * 当前返回的定时SQL任务数量
     * @example `10`
     */
    count: number;
    /**
     * 定时SQL任务列表
     */
    results: any[];
}
