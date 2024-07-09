export interface DeletePolicyInstanceRequest {
    /**
     * 目标集群ID。
     * @example `c8155823d057948c69a****`
     */
    "cluster_id": string;
    /**
     * 策略治理规则名称。
     * @example `ACKAllowedRepos`
     */
    "policy_name": string;
    /**
     * 策略规则实例ID。
     * @example `allowed-repos-mqdsf`
     */
    "instance_name"?: string;
}
