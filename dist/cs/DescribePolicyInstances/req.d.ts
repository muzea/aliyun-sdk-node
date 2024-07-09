export interface DescribePolicyInstancesRequest {
    /**
     * 目标集群ID
     * @example `c8155823d057948c69a****`
     */
    "cluster_id": string;
    /**
     * 策略治理规则名称
     * @example `ACKPSPCapabilities`
     */
    "policy_name"?: string;
    /**
     * 策略实例名称
     * @example `allowed-repos-cz4s2`
     */
    "instance_name"?: string;
}
