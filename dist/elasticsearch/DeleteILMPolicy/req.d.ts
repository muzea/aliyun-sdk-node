export interface DeleteILMPolicyRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif24adwc0082****`
     */
    "InstanceId": string;
    /**
     * 索引生命周期策略名称。
     * @example `slm-history-ilm-policy`
     */
    "PolicyName": string;
}
