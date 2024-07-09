export interface ListSparkJobRequest {
    /**
     * 执行Spark作业的虚拟集群名称。
     * @example `MySparkCluster`
     */
    "VcName": string;
    /**
     * 指定需要查询的页码号，用于遍历全部数据，页码的编码从1开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页返回的作业的个数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 提取Spark虚拟集群的历史作业详情信息的过滤条件，不填写表示没有过滤条件。
     * @example `{   "createTime":"2020-12-28 09:00:00",   "jobName":"SparkPi" }`
     */
    "Condition"?: any;
}
