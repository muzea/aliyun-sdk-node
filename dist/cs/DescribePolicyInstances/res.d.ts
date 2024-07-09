export type DescribePolicyInstancesResponse = {
    /**
     * 策略实例实施者UID
     * @example `16298168****`
     */
    ali_uid: string;
    /**
     * 目标集群ID
     * @example `c8155823d057948c69a****`
     */
    cluster_id: string;
    /**
     * 规则实例名称
     * @example `no-env-var-secrets-****`
     */
    instance_name: string;
    /**
     * 策略治理规则名称
     * @example `ACKPSPCapabilities`
     */
    policy_name: string;
    /**
     * 策略类型名称
     * @example `k8s-general`
     */
    policy_category: string;
    /**
     * 规则模板描述
     * @example `Restricts secrets used in pod envs`
     */
    policy_description: string;
    /**
     * 当前规则实例的配置参数
     * @example `"restrictedNamespaces": [ "test" ]`
     */
    policy_parameters: string;
    /**
     * 规则实例治理等级
     * @example `low`
     */
    policy_severity: string;
    /**
     * 策略实例实施范围：
     * 默认"*"代表集群所有命名空间。
     * 否则返回作用Namespaces名称，多个Namespaces以逗号（,）分隔。
     * @example `*`
     */
    policy_scope: string;
    /**
     * 规则治理动作，取值：
     * - `deny`：拦截违规部署
     * - `warn`：告警
     * @example `deny`
     */
    policy_action: string;
}[];
