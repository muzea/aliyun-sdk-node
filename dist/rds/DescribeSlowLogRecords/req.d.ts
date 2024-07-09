export interface DescribeSlowLogRecordsRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 慢日志统计里的SQL语句唯一标识符，可用于获取该SQL语句的慢日志明细。
     * @example `U2FsdGVk****`
     */
    "SQLHASH"?: string;
    /**
     * 查询开始时间，最大不能早于当前时间30天。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2020-06-17T16:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，需要晚于查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2020-06-18T16:00Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DBName"?: string;
    /**
     * 每页记录数，取值：**30**~**100**。
     * > 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * > 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 节点ID。
     * ><notice>该参数仅适用于集群版实例，可以选择查询指定节点日志。若不传该参数，默认返回主节点日志。></notice>
     * @example `rn-p1fm78s90x5****`
     */
    "NodeId"?: string;
}
