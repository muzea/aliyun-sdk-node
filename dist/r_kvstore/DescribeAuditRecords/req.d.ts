export interface DescribeAuditRecordsRequest {
    /**
     * 需要查询的实例的ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 实例中的节点ID。传入本参数可查询指定节点的监控信息。
     * > * 当Redis实例的架构为读写分离或集群架构时，本参数才可用。
     * > * 您可以调用[DescribeLogicInstanceTopology](~~94665~~)接口查询节点ID。
     * @example `r-bp1zxszhcgatnx****-db-0`
     */
    "NodeId"?: string;
    /**
     * 账号名称，默认（不填任何值）为查询所有账号。
     * @example `demo`
     */
    "AccountName"?: string;
    /**
     * Redis中的Database，默认（不填任何值）为查询所有DB，取值为0 ~ 255，示例0表示DB 0。
     * @example `0`
     */
    "DatabaseName"?: string;
    /**
     * 根据指定的命令查询审计日志，默认查询所有执行过的命令。
     * > 只能传入单个关键词。
     * @example `maxclients`
     */
    "QueryKeywords"?: string;
    /**
     * 客户端IP，默认（不填任何值）为查询所有地址。
     * @example `127.0.0.1`
     */
    "HostAddress"?: string;
    /**
     * 每页显示的最大记录数。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 当前显示的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-03-24T12:10:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，必须晚于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 由于审计日志的条目数较多，一般查询的时间范围建议在10分钟以内，最长不超过1天。
     * @example `2019-03-25T12:10:00Z`
     */
    "EndTime": string;
}
