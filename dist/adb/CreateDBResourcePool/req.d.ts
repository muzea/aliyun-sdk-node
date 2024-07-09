export interface CreateDBResourcePoolRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp11q28kvl688****`
     */
    "DBClusterId": string;
    /**
     * 资源组名称。
     * - 长度不超过255个字符。
     * - 必须以数字、大写字母或小写字母开头。
     * - 可包含数字、大写字母、小写字母、中划线（-）和下划线（_）。
     * @example `test`
     */
    "PoolName": string;
    /**
     * SQL查询的执行模式，取值说明：
     * - **batch**：批处理模式。
     * - **interactive**（默认值）：交互执行模式。
     * > 详情请参见[查询执行模式](~~189502~~)。
     * @example `interactive`
     */
    "QueryType"?: string;
    /**
     * 节点数量，默认节点数0。
     * - 1个节点的资源量为16核64 GB。
     * - （节点数量*16核64 GB）的资源量不能超过集群总的资源量。
     * @example `2`
     */
    "NodeNum"?: number;
}
