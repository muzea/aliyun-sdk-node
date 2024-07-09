export interface ListJobsResponse {
    /**
     * 分页查询时设置的本页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Jobs: {
        /**
         * 作业信息列表。
         */
        JobInfo: {
            /**
             * 执行作业的用户名。
             * @example `user1`
             */
            Owner: string;
            /**
             * 作业描述信息。
             * @example `jobDescription`
             */
            Comment: string;
            /**
             * 作业状态。可能值：
             * - FINISHED：已完成。
             * - RUNNING：运行中。
             * - QUEUED：列队等待。
             * @example `FINISHED`
             */
            State: string;
            /**
             * 错误输出位置。
             * @example `./Temp`
             */
            Stderr: string;
            /**
             * 处理作业的优先级。取值范围：0~9，取值越大，优先级越高。
             * @example `0`
             */
            Priority: string;
            /**
             * 运行作业路径。
             * @example `./Temp`
             */
            ShellPath: string;
            /**
             * 标准输出位置。
             * @example `./Temp`
             */
            Stdout: string;
            /**
             * 作业队列格式。如果不是队列作业，输出为空。
             * 格式为X-Y:Z， 最小值X是第一个索引，最大值Y是最后一个索引，Z表示步长，例如2-7:2，表示作业队列包含编号为2、4、6的3个子作业。
             * @example `1-10:2`
             */
            ArrayRequest: string;
            /**
             * 作业开始时间。
             * @example `2018-07-18T17:46:48`
             */
            StartTime: string;
            /**
             * 作业最后修改时间。
             * @example `2018-07-18T17:46:48`
             */
            LastModifyTime: string;
            /**
             * 运行作业的计算节点列表。
             * @example `['compute2', 'compute3']`
             */
            NodeList: string;
            /**
             * 作业名称。
             * @example `job1`
             */
            Name: string;
            /**
             * 作业ID。
             * @example `0.manager`
             */
            Id: string;
            /**
             * 作业提交时间。
             * @example `2018-07-18T17:46:47`
             */
            SubmitTime: string;
            /**
             * 作业运行所需资源。
             */
            Resources: {
                /**
                 * 作业运行的节点数量。
                 * @example `0`
                 */
                Nodes: number;
                /**
                 * 运行作业的CPU个数。
                 * @example `2`
                 */
                Cores: number;
            };
        }[];
    };
}
