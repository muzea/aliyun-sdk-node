export interface DescribePolicyInstancesRequest {
    /**
     * 策略治理规则名称。
     * @example `ACKNoEnvVarSecrets`
     */
    "PolicyName": string;
    /**
     * 主控实例ID。
     * @example `c102fe5f1ee5d4c87a68121a77d8b****`
     */
    "ClusterId": string;
}
