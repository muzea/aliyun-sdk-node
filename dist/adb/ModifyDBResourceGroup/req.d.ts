export interface ModifyDBResourceGroupRequest {
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
    "GroupName": string;
    /**
     * 查询类型。取值说明：
     * - **interactive**：交互查询模式。
     * - **batch**：默认查询模式。
     * > 详情请参见[查询执行模式](~~189502~~)。
     * @example `batch`
     */
    "GroupType"?: string;
    /**
     * 节点数量，默认值为0。
     * - 1个节点的资源量为16核64 GB。
     * - 节点数量不能过大，需满足节点数量*16核64 GB小于等于集群剩余可用资源。
     * @example `1`
     */
    "NodeNum"?: number;
    /**
     * 需要绑定的数据库账号列表。既可以绑定数据库普通账号，也可以绑定数据库高权限账号。
     */
    "PoolUserList"?: string[];
}
