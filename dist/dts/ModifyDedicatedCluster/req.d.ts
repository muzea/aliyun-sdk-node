export interface ModifyDedicatedClusterRequest {
    /**
     * 集群实例ID。
     * > 参数**InstanceId**与**DedicatedClusterId**，两者必须传入其一。
     * @example `rm-bp1162kryivb8****`
     */
    "InstanceId"?: string;
    /**
     * 专属集群ID。
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
     * 超配比，单位为%。
     * @example `150`
     */
    "OversoldRatio"?: number;
    /**
     * DTS实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
