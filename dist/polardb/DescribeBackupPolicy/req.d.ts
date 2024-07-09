export interface DescribeBackupPolicyRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
}
