export interface DescribeDBClusterSSLRequest {
    /**
     * 集群ID。
     * >您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括集群ID。
     * @example `pc-************`
     */
    "DBClusterId": string;
}
