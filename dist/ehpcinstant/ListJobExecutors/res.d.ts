export interface ListJobExecutorsResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 作业ID。
     * @example `job-xxxx`
     */
    JobId: string;
    /**
     * 作业名称。
     * @example `task0`
     */
    TaskName: string;
    /**
     * 每页条数。
     * @example `10`
     */
    PageSize: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 列表条目总数。
     * @example `50`
     */
    TotalCount: string;
    /**
     * Executor列表。
     */
    Executors: {
        /**
         * Executor编号。
         * @example `0`
         */
        ArrayIndex: number;
        /**
         * 节点IP地址列表。
         */
        IpAddress: string[];
        /**
         * 节点主机名数组。
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
         * @example `Creating executor`
         */
        StatusReason: string;
    }[];
}
