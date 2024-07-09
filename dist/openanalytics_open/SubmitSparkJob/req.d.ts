export interface SubmitSparkJobRequest {
    /**
     * 执行作业的虚拟集群名称。
     * @example `MyCluster`
     */
    "VcName": string;
    /**
     * 定义Spark作业的JSON字符串。JSON字符串的作业参数说明请参见[作业配置指南](~~185924~~)。
     * @example `{     "name": "SparkPi",     "file": "local:///tmp/spark-examples.jar",     "className": "org.apache.spark.examples.SparkPi",     "args": [         "100"     ],     "conf": {         "spark.driver.resourceSpec": "medium",         "spark.executor.instances": 5,         "spark.executor.resourceSpec": "medium"     } }`
     */
    "ConfigJson": string;
}
