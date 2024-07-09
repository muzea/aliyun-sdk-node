export interface ListJobRunsResponse {
    /**
     * Spark任务列表。
     */
    jobRuns: {
        /**
         * 工作空间ID。
         * @example `w-d2d82aa09155****`
         */
        workspaceId: string;
        /**
         * 任务ID。
         * @example `jr-231231`
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
             * @example `0`
             */
            code: string;
            /**
             * 错误信息。
             * @example `connection refused
            `
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
         * @example `1684119314000`
         */
        endTime: number;
        /**
         * 任务代码类型。取值范围：
         * SQL
         * JAR
         * PYTHON
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
        creator: string;
        /**
         * 标签。
         */
        tags: any[];
        /**
         * 运行日志路径。
         */
        log: any;
        /**
         * 运行任务的Spark引擎版本。
         * @example `esr-native-3.4.0`
         */
        releaseVersion: string;
        /**
         * Spark Driver相关信息。
         */
        jobDriver: any;
        /**
         * Spark高级配置。
         */
        configurationOverrides: {
            /**
             * Spark Conf列表。
             */
            configurations: any[];
        };
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    nextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    maxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    totalCount: number;
}
