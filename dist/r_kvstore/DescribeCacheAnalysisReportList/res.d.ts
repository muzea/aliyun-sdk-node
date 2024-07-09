export interface DescribeCacheAnalysisReportListResponse {
    /**
     * 实例ID。
     * @example `1041xxxx`
     */
    InstanceId: string;
    /**
     * 请求ID。
     * @example `743D0A03-52DE-4E6F-8D09-EC1414CF****`
     */
    RequestId: string;
    DailyTasks: {
        /**
         * 离线全量Key分析报告列表。
         */
        DailyTask: {
            /**
             * 离线全量Key分析发起的日期。
             * @example `2019-08-01Z`
             */
            Date: string;
            Tasks: {
                /**
                 * 离线全量Key分析报告。
                 */
                Task: {
                    /**
                     * 离线全量Key分析任务的状态，返回值：
                     * * **success**：成功。
                     * * **running**：进行中。
                     * @example `success`
                     */
                    Status: string;
                    /**
                     * 离线全量Key分析任务的开始时间。
                     * @example `2019-08-01T19:08:49Z`
                     */
                    StartTime: string;
                    /**
                     * 任务ID。
                     * @example `156465****`
                     */
                    TaskId: string;
                    /**
                     * 集群版Redis实例的子节点ID。
                     * @example `r-bp1zxszhcgatnx****-db-0`
                     */
                    NodeId: string;
                }[];
            };
        }[];
    };
}
