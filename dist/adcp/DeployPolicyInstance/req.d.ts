export interface DeployPolicyInstanceRequest {
    /**
     * 策略治理规则名称
     * @example `ACKNoEnvVarSecrets`
     */
    "PolicyName": string;
    /**
     * Namespace集合
     */
    "Namespaces"?: string[];
    /**
     * JSON格式的字符串，可以被解析为一个字符串数组。要部署策略规则的关联集群数组。
     */
    "ClusterIds": string[];
    /**
     * 规则治理动作，取值：
     * - deny：拦截违规部署
     * - warn：告警
     * @example `warn`
     */
    "PolicyAction": string;
    /**
     * 主控实例ID。
     * @example `c102fe5f1ee5d4c87a68121a77d8b****`
     */
    "ClusterId": string;
}
