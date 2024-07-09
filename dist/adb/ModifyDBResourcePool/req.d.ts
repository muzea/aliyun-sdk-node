export interface ModifyDBResourcePoolRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1ub9grke1****`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * @example `test_group`
     */
    "PoolName": string;
    /**
     * SQL查询的执行模式，取值说明：
     * - **batch**：批处理模式。
     * - **interactive**：交互执行模式。
     * > 此参数不填写时，SQL查询的执行模式仍为原值。
     * @example `batch`
     */
    "QueryType"?: string;
    /**
     * 节点数量。
     * - 1个节点的资源量为16核64 GB。
     * - 修改的资源量不能超过集群总的资源量。
     * > - 此参数不填写时，节点数量仍为原值。
     * > - 参数QueryType和NodeNum至少填写一个。
     * @example `2`
     */
    "NodeNum"?: number;
}
