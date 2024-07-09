export interface RestartDBNodeRequest {
    /**
     * 集群节点ID。
     * >您可以通过[DescribeDBClusters](~~185342~~)接口查看账号下所有集群的详细信息，包括节点ID。
     * @example `pi-*************`
     */
    "DBNodeId": string;
}
