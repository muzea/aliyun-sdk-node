export interface StopDedicatedClusterRequest {
    /**
     * 实例ID。
     * > 参数**InstanceId**与**DedicatedClusterId**，两者必须传入其一。
     * @example `rm-bp1162kryivb8****`
     */
    "InstanceId"?: string;
    /**
     * 集群ID。
     * > 参数**InstanceId**与**DedicatedClusterId**，两者必须传入其一。
     * @example `dtscluster_h3fl1cs217sx952`
     */
    "DedicatedClusterId"?: string;
    /**
     * 集群名称。
     * @example `dtscluster_test_001`
     */
    "DedicatedClusterName"?: string;
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
