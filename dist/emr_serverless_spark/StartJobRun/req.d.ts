export interface StartJobRunRequest {
    /**
     * Spark任务请求体。
     */
    "body"?: {
        /**
         * Spark引擎版本号。
         * @example `esr-3.3.1`
         */
        releaseVersion: string;
        /**
         * 任务ID。
         * @example `jr-12345`
         */
        jobId: string;
        /**
         * 任务名称。
         * @example `spark_job_name`
         */
        name: string;
        /**
         * Spark任务运行的资源队列。
         * @example `dev_queue`
         */
        resourceQueueId: string;
        /**
         * 任务类型。取值范围：
         * - SQL
         * - JAR
         * - PYTHON
         * @example `SQL`
         */
        codeType: string;
        /**
         * 任务超时时间。
         * @example `100`
         */
        executionTimeoutSeconds: number;
        /**
         * Spark高级配置。
         */
        configurationOverrides: {
            /**
             * Spark Conf列表。
             */
            configurations: {
                /**
                 * Spark Conf所属配置文件。
                 * @example `spark-default.conf`
                 */
                configFileName: string;
                /**
                 * Spark Conf键。
                 * @example `spark.app.name`
                 */
                configItemKey: string;
                /**
                 * Spark Conf值。
                 * @example `test_app`
                 */
                configItemValue: string;
            }[];
        };
        /**
         * 任务标签列表。
         */
        tags: any[];
        /**
         * 幂等校验TOKEN。
         * @example `8e6aae2810c8f67229ca70bb31cd****`
         */
        clientToken: string;
        /**
         * Spark Driver相关信息。
         */
        jobDriver: any;
    };
    /**
     * 工作空间ID。
     * @example `w-d2d82aa09155****`
     */
    "workspaceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
