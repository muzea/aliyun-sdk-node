export interface ListILMPoliciesRequest {
    /**
     * 实例ID。
     * @example `es-cn-m7r23wodb006n****`
     */
    "InstanceId": string;
    /**
     * 索引生命周期策略名称。
     * @example `policy-1`
     */
    "policyName"?: string;
}
