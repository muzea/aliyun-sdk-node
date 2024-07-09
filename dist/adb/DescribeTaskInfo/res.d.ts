export interface DescribeTaskInfoResponse {
    /**
     * 任务信息。
     */
    TaskInfo: {
        /**
         * 状态：
         * - Waiting：等待中
         * - Running：执行中
         * - Finished：已结束
         * - Failed：失败
         * - Closed：已关闭
         * - Cancel：已取消
         * - Retry：重试
         * - Pause：暂停
         * - Stop：中断
         * @example `Finished`
         */
        Status: string;
        /**
         * 结束时间，格式：yyyy-MM-ddTHH:mm:ssZ。
         * @example `2020-01-07T08:08:50Z`
         */
        FinishTime: string;
        /**
         * 进度，单位：百分比（%）。
         * @example `100`
         */
        Progress: string;
        /**
         * 开始时间，格式：yyyy-MM-ddTHH:mm:ssZ。
         * @example `2020-01-07T07:39:56Z`
         */
        BeginTime: string;
        /**
         * 任务ID。
         * @example `225685759`
         */
        TaskId: number;
    };
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
}
