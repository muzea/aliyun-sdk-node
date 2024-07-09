export interface CreateRequestDiagnosisRequest {
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
     * 数据库名。
     * @example `das`
     */
    "Database": string;
    /**
     * 待诊断的SQL。
     * @example `select * from test where name = 'mockUser'`
     */
    "Sql": string;
}
