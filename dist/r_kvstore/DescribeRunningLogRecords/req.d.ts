export interface DescribeRunningLogRecordsRequest {
    /**
     * 需要查询的实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 实例中的节点ID。传入本参数可查询指定节点的运行日志。
     * > * 当Redis实例的架构为读写分离或集群架构时，本参数才可用。
     * > * 如需传入本参数，您还需要传入**CharacterType**参数。
     * @example `r-bp1zxszhcgatnx****-db-0`
     */
    "NodeId"?: string;
    /**
     * 查询开始时间，您可以查看72小时内的运行日志，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2018-12-03T07:01Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，必须晚于查询开始时间，且起止时间的范围不能超过1天（推荐范围为1小时），格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2018-12-03T08:01Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `0`
     */
    "DBName"?: string;
    /**
     * 数据分片的角色类型，取值：
     * * **master **：主节点，默认值。
     * * **slave **：从节点。
     * @example `master`
     */
    "RoleType"?: string;
    /**
     * 每页可展示的最大记录数，取值： **30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群实例的分片类型，取值：
     * * **proxy**：代理节点。
     * * **db**：数据节点。
     * * **cs**：config server节点。
     * > 传入本参数后，您还需要传入**NodeId**参数。
     * @example `proxy`
     */
    "CharacterType"?: string;
    /**
     * 待查询运行日志的关键词。
     * @example `aof`
     */
    "QueryKeyword"?: string;
    /**
     * 查询结果的排序方式，取值：
     * * **asc**，表示顺序。
     * * **desc**，表示倒序。
     * @example `asc`
     */
    "OrderType"?: string;
}
