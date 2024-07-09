export interface DescribeHistoryTasksStatResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 任务信息列表。
     */
    Items: {
        /**
         * 任务状态。
         * * Scheduled - 等待执行
         * * Running - 执行中
         * * Succeed - 执行成功
         * * Failed - 执行失败
         * * Cancelling - 正在终止
         * * Canceled - 已终止
         * * Waiting - 等待预设时间
         * @example `Succeed,Waiting`
         */
        Status: string;
        /**
         * 任务总数量。
         * @example `20`
         */
        TotalCount: number;
    }[];
}
