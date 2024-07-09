export interface DescribeHistoryTasksStatResponse {
    /**
     * 请求ID。
     * @example `FC724D23-XXXX-XXXX-ABB1-606C935AE7FD`
     */
    RequestId: string;
    /**
     * 任务对象列表。
     */
    Items: {
        /**
         * 任务状态。
         * - Scheduled：等待执行
         * - Running：执行中
         * - Succeed：执行成功
         * - Failed：执行失败
         * - Cancelling：正在终止
         * - Canceled：已终止
         * - Waiting：等待预设时间
         * @example `Succeed`
         */
        Status: string;
        /**
         * 任务状态对应的任务数量。
         * @example `2`
         */
        TotalCount: number;
    }[];
}
