export interface ListJobsRequest {
    /**
     * 分页查询时设置的本页条数。 默认50，最大100。
     * @example `50`
     */
    "PageSize"?: string;
    /**
     * 当前页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 查询作业过滤条件。
     */
    "Filter"?: {
        /**
         * 作业名称。支持模糊查询。
         * @example `testJob`
         */
        JobName: string;
        /**
         * 作业ID。
         * @example `job-xxxx`
         */
        JobId: string;
        /**
         * 在此时间之后提交的作业，以所在地域的时间转化为（国内站为东八区）Unix时间戳。
         * @example `1703819914`
         */
        TimeCreatedAfter: number;
        /**
         * 在此时间之前提交的作业，以所在地域的时间转化为（国内站为东八区）Unix时间戳。
         * @example `1703820113`
         */
        TimeCreatedBefore: number;
        /**
         * 作业状态。取值范围：
         * - Pending：作业排队中
         * - Initing：作业初始化中
         * - Succeed：作业运行成功
         * - Failed：作业运行失败
         * - Running：作业运行中
         * - Exception：调度异常
         * - Retrying：作业重试中
         * - Expired：作业超时
         * - Deleting：作业删除中
         * - Deleted：作业删除完成
         * @example `Running`
         */
        Status: string;
    };
    /**
     * 排序方式。
     */
    "SortBy"?: {
        /**
         * 排序标签。取值范围：
         * - time_start
         * - job_name
         * @example `time_start`
         */
        Label: string;
        /**
         * 排序顺序。取值范围：
         * - ASC（默认值）：升序
         * - DESC：降序
         * @example `ASC`
         */
        Order: string;
    };
}
