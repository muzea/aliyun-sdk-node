export interface DescribeILMPolicyRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif24adwc0082****`
     */
    "InstanceId": string;
    /**
     * 索引生命周期策略名称。
     * @example `policy-1`
     */
    "PolicyName": string;
}
