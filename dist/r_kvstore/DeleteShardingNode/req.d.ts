export interface DeleteShardingNodeRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 待删除的数据分片节点ID，如需一次传入多个分片节点ID，请使用英文逗号（,）分隔。
     * > 若同时传递NodeId与ShardCount参数时，优先以NodeId参数执行。
     * @example `r-bp1zxszhcgatnx****-db-0,r-bp1zxszhcgatnx****-db-1`
     */
    "NodeId"?: string;
    /**
     * 待删除的分片数量，将从尾部开始计数，删除相应数量的分片节点。
     * > 例如实例原有5个分片节点，分别为db-0、db-1、db-2、db-3和db-4，输入本参数为2，则将删除db-3和db-4。
     * @example `1`
     */
    "ShardCount"?: number;
    /**
     * 是否开启强制传输，取值：
     * - **false**（默认）：在变配前，系统会检查实例当前的内核小版本，若内核版本过低则会报错，您需要升级内核小版本后重试。
     * - **true**：跳过检查项，直接执行变配操作。
     * @example `false`
     */
    "ForceTrans"?: boolean;
}
