export interface ListJobsResponse {
    /**
     * 本次请求条件下的数据总量。
     * 此参数为可选参数，默认可不返回。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 分页查询时设置的本页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 作业列表。
     */
    JobList: {
        /**
         * 作业名称。
         * @example `testJob`
         */
        JobName: string;
        /**
         * 作业ID。
         * @example `job-xxx`
         */
        JobId: string;
        /**
         * 作业描述。
         * @example `Demo`
         */
        JobDescription: string;
        /**
         * 作业提交时间。
         * @example `2024-01-25 12:29:21`
         */
        CreateTime: string;
        /**
         * 创建人UID。
         * @example `129**********`
         */
        OwnerUid: string;
        /**
         * 作业状态。可能值：
         * - Pending：作业排队中
         * - Initing：作业初始化中
         * - Succeed：作业运行成功
         * - Failed：作业运行失败
         * - Running：作业运行中
         * - Exception：调度异常
         * - Retrying：作业重试中
         * - Expired：作业超时
         * - Deleting：作业删除中
         * - Deleting：作业删除完成
         * @example `Running`
         */
        Status: string;
        /**
         * 任务数量。
         * @example `1`
         */
        TaskCount: number;
        /**
         * 运行节点数量。
         * @example `1`
         */
        ExecutorCount: number;
        /**
         * 作业开始时间。
         * @example `2024-01-25 12:29:23`
         */
        StartTime: string;
        /**
         * 作业结束时间。
         * @example `2024-01-25 12:35:23`
         */
        EndTime: string;
        /**
         * 是否是长时间运行的作业。
         * @example `true`
         */
        TaskSustainable: boolean;
    }[];
}
