export interface GetJobDetailResponse {
    /**
     * 请求的唯一ID。
     * @example `5F10AB6E-8984-4E32-B821-4E1512711B8C`
     */
    RequestId: string;
    /**
     * Spark作业的详细信息。
     */
    JobDetail: {
        /**
         * Spark作业的状态码。
         * @example `success`
         */
        Status: string;
        /**
         * 最后一次更新Spark作业状态的时间，时区为执行作业区域的时区。
         * @example `2020-10-27 16:23:16`
         */
        UpdateTime: string;
        /**
         * Executor计算资源规格。取值范围：
         * - **small**：1Core 4GB
         * - **medium**：2Core 8GB
         * - **large**：4Core 16GB
         * - **xlarge**：8Core 32GB
         * @example `small`
         */
        ExecutorResourceSpec: string;
        /**
         * Spark作业开始执行的时间，时区为执行区域的时区。
         * @example `2020-10-27 16:23:16`
         */
        CreateTime: string;
        /**
         * Driver计算资源规格。取值范围：
         * - **small**：1Core 4GB
         * - **medium**：2Core 8GB
         * - **large**：4Core 16GB
         * - **xlarge**：8Core 32GB
         * @example `small`
         */
        DriverResourceSpec: string;
        /**
         * Spark作业开始执行的毫秒级时间戳。
         * @example `1603786996000`
         */
        CreateTimeValue: string;
        /**
         * 最后一次更新Spark作业状态的毫秒级时间戳。
         * @example `1603786996000`
         */
        UpdateTimeValue: string;
        /**
         * Spark作业的UI，具体请参考[配置Spark UI](~~163470~~)。
         * @example `https://dlaui-cn-hangzhou.aliyuncs.com/?token=xxx`
         */
        SparkUI: string;
        /**
         * 最近一次尝试执行的Spark作业ID。
         * @example `202105251618hzslot9906b0b40000005-0001`
         */
        LastJobAttemptId: string;
        /**
         * 提交Spark作业的毫秒级时间戳。
         * @example `1603786996000`
         */
        SubmitTimeValue: string;
        /**
         * Spark作业的名称。
         * @example `SparkPi`
         */
        JobName: string;
        /**
         * Spark作业的ID。
         * @example `j202010271622hangzhouf742a4330000923`
         */
        JobId: string;
        /**
         * Spark作业Executor数量。
         * @example `1`
         */
        ExecutorInstances: string;
        /**
         * 执行Spark作业的虚拟集群名称。
         * @example `MyCluster`
         */
        VcName: string;
        /**
         * 提交Spark作业的时间，时区为执行区域的时区。
         * @example `2020-10-27 16:23:16`
         */
        SubmitTime: string;
        /**
         * 定义Spark作业的JSON字符串。
         * @example `{\"args\":[\"100\"],\"name\":\"SparkPi\",\"className\":\"org.apache.spark.examples.SparkPi\",\"conf\":{\"spark.driver.resourceSpec\":\"medium\",\"spark.executor.instances\":5,\"spark.executor.resourceSpec\":\"medium\"},\"file\":\"local:///tmp/spark-examples.jar\"}`
         */
        Detail: string;
    };
}
