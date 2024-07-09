export interface ListServerlessJobsResponse {
    /**
     * 本次请求条件下的数据总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 分页查询时设置的本页条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * Serverless作业信息列表。
     */
    Jobs: {
        /**
         * Serverless作业ID或子任务ID（数组作业）。
         * @example `5`
         */
        JobId: string;
        /**
         * Serverless作业名。
         * @example `testjob`
         */
        JobName: string;
        /**
         * Serverless作业状态。可能的值：
         * - Pending: 排队中。
         * - Initing：初始化中。
         * - Running：运行中。
         * - Succeeded：已完成。
         * - Canceled：已取消。
         * - Failed：运行失败。
         * @example `Running`
         */
        State: string;
        /**
         * Serverless作业的调度优先级。取值范围：0~999，取值越大，优先级越高。
         * @example `9`
         */
        Priority: string;
        /**
         * 执行Serverless作业的队列名。
         * @example `comp`
         */
        Queue: string;
        /**
         * 执行Serverless作业的用户名。
         * @example `testuser`
         */
        User: string;
        /**
         * Serverless作业提交时间戳。
         * @example `1647423718`
         */
        SubmitTime: string;
        /**
         * Serverless作业开始时间戳。
         * @example `1647427667`
         */
        StartTime: string;
        /**
         * Serverless作业结束时间戳。
         * @example `1682128871`
         */
        EndTime: string;
        /**
         * 是否是数组作业。可能的值：
         * - True：是数组作业。
         * - False：不是数组作业。
         * @example `True`
         */
        IsArrayJob: boolean;
    }[];
}
