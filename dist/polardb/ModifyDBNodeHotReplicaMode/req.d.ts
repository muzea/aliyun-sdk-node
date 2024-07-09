export interface ModifyDBNodeHotReplicaModeRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括集群ID。
     * @example `pc-*****************`
     */
    "DBClusterId": string;
    /**
     * 数据库集群节点ID。
     * @example `pi-*****************`
     */
    "DBNodeId": string;
    /**
     * 是否开启热备。取值范围：
     * - **ON**：开启
     * - **OFF**：关闭
     * @example `ON`
     */
    "HotReplicaMode": string;
}
