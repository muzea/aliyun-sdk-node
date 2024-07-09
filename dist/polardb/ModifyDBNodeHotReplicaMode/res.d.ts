export interface ModifyDBNodeHotReplicaModeResponse {
    /**
     * 请求ID。
     * @example `9F4DDFBF-205C-5A3E-8DC2-C6**********`
     */
    RequestId: string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-*****************`
     */
    DBClusterId: string;
    /**
     * 生成的订单ID。
     * @example `2148126708*****`
     */
    OrderId: string;
}
