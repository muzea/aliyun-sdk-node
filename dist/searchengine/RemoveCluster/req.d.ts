export interface RemoveClusterRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 集群名称
     * @example `bj_vpc_domain_2`
     */
    "clusterName"?: string;
}
