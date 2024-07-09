export interface ListSparkJobResponse {
    /**
     * 本次请求的唯一编码。
     * @example `E18B0634-F003-486A-90B9-4AA6932DA3AA`
     */
    RequestId: string;
    /**
     * 虚拟集群的历史作业结果列表。
     */
    DataResult: {
        /**
         * 当前请求返回的页码。
         * @example `1`
         */
        PageNumber: string;
        /**
         * 当前请求返回的每页作业数量。
         * @example `10`
         */
        PageSize: string;
        /**
         * 当前可查询的历史作业的总数。
         * @example `4998`
         */
        TotalCount: string;
        /**
         * 历史作业详情数组。
         */
        JobList: {
            /**
             * 作业的状态码。
             * @example `running`
             */
            Status: string;
            /**
             * 最后一次更新作业状态的时间，时区为该集群所在的地域的时区。
             * @example `2020-10-27 17:51:05`
             */
            UpdateTime: string;
            /**
             * 作业所申请的Executor的规格。
             * @example `small`
             */
            ExecutorResourceSpec: string;
            /**
             * 创建Spark作业的时间点，时区为该集群所在的地域的时区。
             * @example `2020-10-27 17:51:05`
             */
            CreateTime: string;
            /**
             * 创建Spark作业的毫秒级时间戳。
             * @example `1603792267000`
             */
            CreateTimeValue: string;
            /**
             * 作业所申请的Driver的实例规格。
             * @example `small`
             */
            DriverResourceSpec: string;
            /**
             * 最后一次更新作业状态的毫秒级时间戳。
             * @example `1603792267000`
             */
            UpdateTimeValue: string;
            /**
             * Spark作业的UI，具体请参考文档[Spark UI](~~163470~~)。
             * @example `https://dlaui-cn-hangzhou.aliyuncs.com/?token=xxx`
             */
            SparkUI: string;
            /**
             * 提交作业的毫秒级时间戳。
             * @example `1603792267000`
             */
            SubmitTimeValue: string;
            /**
             * Spark作业的名称。
             * @example `SparkPi`
             */
            JobName: string;
            /**
             * Spark作业的ID。
             * @example `j202010271750hangzhouf742a4330000950`
             */
            JobId: string;
            /**
             * 执行作业的虚拟集群名称。
             * @example `MyCluster`
             */
            VcName: string;
            /**
             * 作业所申请的Executor的数量。
             * @example `100`
             */
            ExecutorInstances: string;
            /**
             * 提交作业的时间，时区为该集群所在的地域的时区。
             * @example `2020-10-27 17:51:05`
             */
            SubmitTime: string;
            /**
             * 描述此作业的JSON格式的字符串。
             * @example `{"args":["100"],"name":...}`
             */
            Detail: string;
        }[];
    };
}
