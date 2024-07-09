export interface CreateJobResponse {
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
     * 任务列表。
     */
    Tasks: {
        /**
         * 任务名称。
         * @example `task0`
         */
        TaskName: string;
        /**
         * 任务包含的Executor ID列表。
         */
        ExecutorIds: string[];
    }[];
}
