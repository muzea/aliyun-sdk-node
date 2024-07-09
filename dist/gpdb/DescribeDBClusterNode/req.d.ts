export interface DescribeDBClusterNodeRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp***************`
     */
    "DBInstanceId": string;
    /**
     * 节点类型。取值说明：
     * - **master**：Master节点。
     * - **segment**：Segment节点。
     * > 如果不传入该参数，则返回所有节点的监控信息。
     * @example `master`
     */
    "NodeType"?: string;
}
