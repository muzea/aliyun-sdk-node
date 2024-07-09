export interface DeletePolicyInstanceRequest {
    /**
     * 主控实例ID。
     * @example `c09946603cd764dac96135f51d1ba****`
     */
    "ClusterId": string;
    /**
     * 策略治理规则名称。
     * @example `ACKNoEnvVarSecrets`
     */
    "PolicyName": string;
    /**
     * JSON格式的字符串，可以被解析为一个字符串数组。要删除策略规则的关联集群数组。
     */
    "ClusterIds"?: string[];
}
