export interface ListExecutorsResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 分页查询时设置的本页条数。
     * @example `50`
     */
    PageSize: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 列表条目总数。
     * @example `40`
     */
    TotalCount: string;
    /**
     * Executor列表。
     */
    Executors: {
        /**
         * Executor ID。格式为JobId-TaskName-ArrayIndex。
         * @example `job-xxxx-task0-1`
         */
        ExecutorId: string;
        /**
         * 作业ID。
         * @example `job-hy1nggvyukuvkr******`
         */
        JobId: string;
        /**
         * 作业名称。
         * @example `testJob`
         */
        JobName: string;
        /**
         * 任务名称。
         * @example `task0`
         */
        TaskName: string;
        /**
         * Executor编号。
         * @example `0`
         */
        ArrayIndex: number;
        /**
         * 内网IP地址列表。
         */
        IpAddress: string[];
        /**
         * 主机名列表。
         */
        HostName: string[];
        /**
         * 创建时间。
         * @example `2024-02-20 10:04:10`
         */
        CreateTime: string;
        /**
         * 结束时间。
         * @example `2024-02-20 10:04:18`
         */
        EndTime: string;
        /**
         * 作业状态。可能值：
         * - Pending：作业排队中
         * - Initing：作业初始化中
         * - Succeed：作业运行成功
         * - Failed：作业运行失败
         * - Running：作业运行中
         * - Unknown：查询不到ECS/ECI状态
         * - Exception：资源调度异常
         * - Retrying：作业重试中
         * - Expired：作业超时
         * - Deleting：作业删除中
         * - Deleted：作业删除完成
         * @example `Running`
         */
        Status: string;
        /**
         * 状态原因描述。
         * @example `Succeeded to release executor resource`
         */
        StatusReason: string;
    }[];
}
