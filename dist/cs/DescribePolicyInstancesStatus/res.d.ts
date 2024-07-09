export interface DescribePolicyInstancesStatusResponse {
    /**
     * 不同策略类型下的策略实例计数列表。
     */
    policy_instances: {
        /**
         * 策略类型。支持的策略类型和类型说明详见[容器安全策略规则库说明](~~359819~~)。
         * @example `compliance`
         */
        policy_category: string;
        /**
         * 策略名称。
         * @example `ACKRestrictRoleBindings`
         */
        policy_name: string;
        /**
         * 策略描述。
         * @example `Restricts use of the cluster-admin role.`
         */
        policy_description: string;
        /**
         * 策略治理等级。
         * @example `medium`
         */
        policy_severity: string;
        /**
         * 已部署的策略实例计数，如果字段为空说明未部署该类型策略实例。
         * @example `1`
         */
        policy_instances_count: number;
    }[];
    /**
     * 集群中当前部署的不同治理等级的策略实例计数。
     * @example `{ "high": 11,     "medium": 1  }`
     */
    instances_severity_count: any;
}
