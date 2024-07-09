export interface DescribePolicyInstancesStatusResponse {
    /**
     * 请求ID。
     * @example `5D89C59A-A7EB-5BF8-B094-6479175346CA`
     */
    RequestId: string;
    /**
     * 不同策略类型下的策略实例计数列表。
     */
    Policies: {
        /**
         * 不同策略类型下的策略实例计数列表。
         */
        PolicyInstances: {
            /**
             * 策略治理规则名称。
             * @example `ACKRestrictRoleBindings`
             */
            PolicyName: string;
            /**
             * 策略类型。
             * @example `compliance
            `
             */
            PolicyCategory: string;
            /**
             * 策略描述。
             * @example `Restricts use of the cluster-admin role.
            `
             */
            PolicyDescription: string;
            /**
             * 策略治理等级。
             * @example `low`
             */
            PolicySeverity: string;
            /**
             * 已部署的策略实例计数，如果字段为空说明未部署该类型策略实例。
             * @example `2`
             */
            PolicyInstancesCount: number;
            /**
             * 已部署策略的关联集群。
             */
            PolicyClusters: {
                /**
                 * 集群ID。
                 * @example `c639e5310e73e4a29ab18d6330a633****`
                 */
                ClusterId: string;
                /**
                 * 策略部署状态。
                 * @example `Success`
                 */
                Status: string;
            }[];
        }[];
        /**
         * 集群中当前部署的不同治理等级的策略实例计数。
         */
        SeverityInfo: {
            /**
             * 策略治理等级。
             * @example `low`
             */
            SeverityType: string;
            /**
             * 策略实例计数。
             * @example `2`
             */
            SeverityCount: string;
        }[];
    };
}
