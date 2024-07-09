export interface ModifyDBClusterDeletionRequest {
    /**
     * 目标集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查看集群ID。
     * @example `pc-bp1313h70cd5m****`
     */
    "DBClusterId": string;
    /**
     * 开启或者关闭集群保护锁，默认值为false，取值：
     * - **true**：开启集群保护锁，开启后不能直接释放该集群，需要关闭集群保护锁后重新释放。
     * - **false**：关闭集群保护锁。
     * @example `true`
     */
    "Protection"?: boolean;
}
