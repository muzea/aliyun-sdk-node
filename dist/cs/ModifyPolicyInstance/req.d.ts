export interface ModifyPolicyInstanceRequest {
    /**
     * 目标集群ID
     * @example `c8155823d057948c69a****`
     */
    "cluster_id": string;
    /**
     * 策略治理规则名称
     * @example `ACKAllowedRepos`
     */
    "policy_name": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 规则治理动作，取值：
         * - `deny`：拦截违规部署
         * - `warn`：告警
         * @example `deny`
         */
        action: string;
        /**
         * 策略规则实例ID
         * @example `allowed-repos-cbhhb`
         */
        instance_name: string;
        /**
         * 限制策略实施的命名空间，为空时表示所有命名空间
         */
        namespaces: string[];
        /**
         * 当前规则实例的配置参数。更多参数配置规则，请参见[容器安全策略规则库说明](~~359819~~)。
         * @example `"restrictedNamespaces": [ "test" ]`
         */
        parameters: any;
    };
}
