export interface DescribePolicyInstancesResponse {
    /**
     * 请求ID。
     * @example `5BE4C329-DCC2-5B61-8F66-112B7D7FC712`
     */
    RequestId: string;
    /**
     * 策略实例列表。
     */
    Policies: {
        /**
         * 策略治理规则名称
         * @example `ACKPSPCapabilities`
         */
        PolicyName: string;
        /**
         * 规则实例名称。
         * @example `no-env-var-secrets-****
        `
         */
        InstanceName: string;
        /**
         * 策略类型名称。
         * @example `k8s-general
        `
         */
        PolicyCategory: string;
        /**
         * 规则模板描述。
         * @example `Restricts secrets used in pod envs
        `
         */
        PolicyDescription: string;
        /**
         * 规则实例治理等级。
         * @example `low`
         */
        PolicySeverity: string;
        /**
         * 策略实例实施范围：
         * 默认"*"代表集群所有命名空间。
         * 否则返回作用Namespaces名称，多个Namespaces以逗号（,）分隔。
         * @example `*`
         */
        PolicyScope: string;
        /**
         * 规则治理动作，取值：
         * - deny：拦截违规部署
         * - warn：告警
         * @example `warn`
         */
        PolicyAction: string;
        /**
         * 关联集群中当前被拦截和告警两种处理类型下不同治理等级的违规计数。
         * @example `2`
         */
        TotalViolations: number;
        /**
         * 关联集群ID。
         * @example `cd0e6882394f7496589837cac3585****`
         */
        ClusterId: string;
        /**
         * 当前规则实例的配置参数。
         */
        PolicyParameters: any;
    }[];
}
