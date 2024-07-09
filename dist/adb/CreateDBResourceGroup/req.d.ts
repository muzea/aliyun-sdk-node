export interface CreateDBResourceGroupRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1ub9grke1****`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * - 长度不超过255个字符。
     * - 必须以数字或大写字母开头。
     * - 可包含数字、大写字母、中划线（-）和下划线（_）。
     * @example `TEST_GROUP`
     */
    "GroupName": string;
    /**
     * 查询类型，取值说明：
     * - **interactive**（默认值）：交互查询模式。
     * - **batch**：默认查询模式。
     * @example `interactive`
     */
    "GroupType"?: string;
    /**
     * 节点数量，默认值为0。
     * - 1个节点的资源量为16核64 GB。
     * - 节点数量不能过大，需满足节点数量*16核64 GB小于等于集群剩余可用资源。
     * @example `2`
     */
    "NodeNum"?: number;
}
