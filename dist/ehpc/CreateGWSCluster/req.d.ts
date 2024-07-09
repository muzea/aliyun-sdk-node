export interface CreateGWSClusterRequest {
    /**
     * VPC ID。
     * @example `vpc-bp1se4wjbp0760yju****`
     */
    "VpcId": string;
    /**
     * 可视化服务集群类型，固定为：gws.s1.standard
     * @example `gws.s1.standard`
     */
    "ClusterType": string;
    /**
     * 可视化服务集群的名称。
     * @example `TestGWS`
     */
    "Name"?: string;
    /**
     * VPC中交换机ID。E-HPC当前仅支持VPC网络。
     * @example `vsw-bp1lfcjbfb099rrjn****`
     */
    "VSwitchId"?: string;
}
