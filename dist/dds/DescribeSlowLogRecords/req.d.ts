export interface DescribeSlowLogRecordsRequest {
    /**
     *  实例ID。
     * > 如果是分片集群实例，您还需要配置`NodeId`。
     * @example `dds-bp1fc7e65108****`
     */
    "DBInstanceId": string;
    /**
     *  Shard节点ID。
     * > 如果`DBInstanceId`配置的是分片集群实例的ID，需要配置该参数。
     * @example `d-bp18b06ebc21****`
     */
    "NodeId"?: string;
    /**
     *  查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2021-08-15T14:13Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * > - 必须晚于查询开始时间。
     * > - 查询结束时间距查询开始时间不得超过24个小时，超过则调用失败。
     * @example `2021-08-16T14:13Z`
     */
    "EndTime": string;
    /**
     * 数据库名。
     * @example `mongodbtest`
     */
    "DBName"?: string;
    /**
     * 查询关键字，多个关键字以空格分隔，不超过10个关键字。
     * @example `test test1`
     */
    "QueryKeywords"?: string;
    /**
     * 关键字搜索的逻辑操作， 默认值为and。
     * @example `and`
     */
    "LogicalOperator"?: string;
    /**
     *  每页记录数，取值范围为**30**~**100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 按时间的升降序对查询到的慢日志进行排序。取值如下：
     * - asc：按时间升序排序。
     * - desc：按时间降序排序。
     * @example `asc`
     */
    "OrderType"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
}
