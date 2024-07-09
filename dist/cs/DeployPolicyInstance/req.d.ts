export interface DeployPolicyInstanceRequest {
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
     * 请求结构。
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
         * 限制策略实施的命名空间，为空时表示所有命名空间。
         */
        namespaces: string[];
        /**
         * 当前规则实例的参数配置。每个策略治理规则支持的参数以及对应的参数说明，详见 [容器安全策略规则库说明](https://www.alibabacloud.com/help/doc-detail/359819.html) 。
         * @example `{   "repos": [     "registry-vpc.cn-hangzhou.aliyuncs.com/acs/",     "registry.cn-hangzhou.aliyuncs.com/acs/"   ] }`
         */
        parameters: any;
    };
}
