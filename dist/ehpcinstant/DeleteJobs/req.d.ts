export interface DeleteJobsRequest {
    /**
     * 待删除作业信息。
     */
    "JobSpec"?: {
        /**
         * 待删除的作业ID。
         * 您可以调用ListJobs查询作业ID。
         * @example `job-xxxx
        `
         */
        JobId: string;
        /**
         * 待删除作业的任务详情。
         */
        TaskSpec: {
            /**
             * 待删除的任务名称。
             * @example `task0`
             */
            TaskName: string;
            /**
             * 待删除的数组作业索引列表。
             */
            ArrayIndex: number[];
        }[];
    }[];
    /**
     * Executor ID列表，最大支持100条。
     */
    "ExecutorIds"?: string[];
}
