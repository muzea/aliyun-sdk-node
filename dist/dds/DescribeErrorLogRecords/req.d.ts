export interface DescribeErrorLogRecordsRequest {
    /**
     * 实例ID。
     * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
     * @example `dds-bp12c5b040dc****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Mongos节点ID或Shard节点ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
     * @example `d-bp128a003436****`
     */
    "NodeId"?: string;
    /**
     * 实例中节点的角色。取值：
     * - **primary**：主节点。
     * - **secondary**：从节点。
     * > 当**NodeId**参数传入的是Mongos节点ID时，本参数取值只能为**primary**。
     * @example `primary`
     */
    "RoleType"?: string;
    /**
     *  查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-01-01T12:10Z`
     */
    "StartTime": string;
    /**
     *  查询结束时间，必须晚于查询开始时间，且与查询开始时间间隔时长不能大于一天。格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-01-02T12:10Z`
     */
    "EndTime": string;
    /**
     * 数据库名。
     * @example `mongodbtest`
     */
    "DBName"?: string;
    /**
     *  每页记录数，取值范围：**30**~**100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
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
}
