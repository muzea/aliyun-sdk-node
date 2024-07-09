export interface GetJobRunResponse {
    /**
     * 任务详情。
     */
    jobRun: {
        /**
         * 工作空间ID。
         * @example `w-d2d82aa09155****`
         */
        workspaceId: string;
        /**
         * 任务运行ID。
         * @example `jr-93d98d2f7061****`
         */
        jobRunId: string;
        /**
         * 任务名称。
         * @example `jobName`
         */
        name: string;
        /**
         * 任务状态。
         * @example `Running`
         */
        state: string;
        /**
         * 状态变化原因。
         */
        stateChangeReason: {
            /**
             * 错误码。
             * @example `ERR-100000`
             */
            code: string;
            /**
             * 错误信息。
             * @example `connection refused`
             */
            message: string;
        };
        /**
         * 任务提交时间。
         * @example `1684119314000`
         */
        submitTime: number;
        /**
         * 任务结束时间。
         * @example `1684122914000`
         */
        endTime: number;
        /**
         * 任务代码类型。可能值：
         * - SQL
         * - JAR
         * - PYTHON
         * @example `SQL`
         */
        codeType: string;
        /**
         * 作业Web UI。
         * @example `http://spark-ui`
         */
        webUI: string;
        /**
         * 运行超时时间。
         * @example `3600`
         */
        executionTimeoutSeconds: number;
        /**
         * 创建用户UID。
         * @example `150978934701****`
         */
        resourceOwnerId: string;
        /**
         * 标签列表。
         */
        tags: any[];
        /**
         * 运行日志路径。
         */
        log: any;
        /**
         * 运行任务的Spark引擎版本。
         * @example `esr-3.3.1`
         */
        releaseVersion: string;
        /**
         * 运行任务的队列名称。
         * @example `root_queue`
         */
        resourceQueueId: string;
        /**
         * Spark Driver相关信息。
         */
        jobDriver: any;
        /**
         * Spark任务配置。
         */
        configurationOverrides: {
            /**
             * 配置列表。
             */
            configurations: any[];
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
}
