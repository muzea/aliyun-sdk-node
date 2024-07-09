export interface UpdateLoggingRequest {
    /**
     * Project 名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 请求结构体。
     */
    "body": {
        /**
         * 服务日志要保存到的 project 名称。
         * @example `my-project`
         */
        loggingProject: string;
        /**
         * 服务日志配置列表。
         */
        loggingDetails: {
            /**
             * 服务日志的种类。取值包括：
             * -  consumergroup_log：消费组延迟日志
             * -  logtail_alarm：消费组延迟日志
             * - operation_log：操作日志
             * - logtail_profile：Logtail采集日志
             * - metering：计量日志
             * - logtail_status：Logtail状态日志
             * - scheduled_sql_alert：Scheduled SQL作业运行日志
             * -  etl_alert：数据加工作业的运行日志
             * @example `consumergroup_log`
             */
            type: string;
            /**
             * 该种类服务日志要保存到的Logstore名称。
             * @example `my-logstore`
             */
            logstore: string;
        }[];
    };
}
