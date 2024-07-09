export interface GetRequestDiagnosisPageRequest {
    /**
     * 实例ID。
     * @example `rm-0iwhhl8gx0ld6****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版、PolarDB PostgreSQL版（兼容Oracle）和云数据库MongoDB等集群实例，需要提供节点ID。
     * @example `202****`
     */
    "NodeId"?: string;
    /**
     * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页最大记录数，取值大于0且不超过Integer数据类型的最大值，默认值为10。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 查询任务的开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1633071840000`
     */
    "StartTime": number;
    /**
     * 查询任务的结束时间，格式为Unix时间戳，单位为毫秒。
     * @example `1634972640000`
     */
    "EndTime": number;
}
