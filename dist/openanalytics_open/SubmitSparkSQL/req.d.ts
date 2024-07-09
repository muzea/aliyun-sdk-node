export interface SubmitSparkSQLRequest {
    /**
     * 执行SparkSQL作业的虚拟集群名称。
     * @example `MySparkCluster`
     */
    "VcName": string;
    /**
     * Spark SQL内容。具体请参考[Spark SQL](~~185724~~)。
     * @example `set spark.driver.resourceSpec=medium;set spark.executor.instances=5;  set spark.executor.resourceSpec=medium;  set spark.app.name=sparksqltest;  show databases;`
     */
    "Sql": string;
}
