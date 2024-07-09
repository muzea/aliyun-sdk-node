export interface DescribeSlowLogRecordsRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 实例中的节点ID。传入本参数可查询指定节点的慢日志信息。
     * > 当Redis实例的架构为读写分离或集群架构时，本参数才可用。
     * @example `r-bp1zxszhcgatnx****-db-0`
     */
    "NodeId"?: string;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-03-10T14:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，必须晚于查询开始时间，且起止时间的范围不能超过1天（推荐范围为1小时），格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-03-10T15:00Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `0`
     */
    "DBName"?: string;
    /**
     * 每页可展示的最大记录数，取值：**30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 慢日志类型，取值：
     * * **proxy**：代理节点中的慢日志。
     * * **db**：默认值，数据节点中的慢日志。
     * @example `proxy`
     */
    "SlowLogRecordType"?: string;
    /**
     * 可设置一个字符串类型的值，使用该值作为关键词对返回结果进行搜索。
     * @example `keyword1`
     */
    "QueryKeyword"?: string;
    /**
     * 返回结果的排序方式，取值：
     * * **ASC**：升序。
     * * **DESC**：默认值，降序。
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 返回结果的排序依据，取值：
     * * **execution_time**：默认值，按照请求的执行开始时间排序。
     * * **latency**：按照请求的执行耗时排序。
     * @example `execution_time`
     */
    "OrderBy"?: string;
}
