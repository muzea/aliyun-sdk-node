export interface ModifyClusterRequest {
    /**
     * 集群ID。
     * @example ` cds-bp1b136j****5d58`
     */
    "ClusterId": string;
    /**
     * 集群名称。
     * @example `Cassandra_test`
     */
    "ClusterName"?: string;
    "ConfirmProductOffline"?: string;
}
