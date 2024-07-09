export interface DescribePolicyGovernanceInClusterResponse {
    /**
     * 请求ID。
     * @example `96C6A284-0EC3-5486-9A97-E8E9EE27E9EF`
     */
    RequestId: string;
    /**
     * 策略治理详情列表。
     */
    PolicyGovernances: {
        /**
         * 策略部署集群信息。
         */
        Cluster: {
            /**
             * 关联集群ID。
             * @example `ca5cf1b5edb5c4736a6ea0dfb4061****`
             */
            ClusterId: string;
            /**
             * 集群名称。
             * @example `ack-001`
             */
            Name: string;
            /**
             * 集群所在地域ID。
             * @example `cn-heyuan`
             */
            RegionId: string;
            /**
             * 集群状态。
             * @example `running`
             */
            State: string;
            /**
             * 集群类型。
             * @example `ManagedKubernetes`
             */
            ClusterType: string;
            /**
             * 集群规格。
             * @example `ack.pro.small `
             */
            ClusterSpec: string;
            /**
             * 集群标识。
             * @example `Default`
             */
            Profile: string;
        };
        /**
         * 策略治理详情。
         */
        PolicyGovernance: {
            /**
             * 当前关联集群中开启的不同等级策略计数统计。
             */
            OnState: {
                /**
                 * 当前开启的策略种类计数。
                 * @example `2`
                 */
                EnabledCount: number;
                /**
                 * 该等级下策略种类总数。
                 * @example `2`
                 */
                TotalCount: number;
                /**
                 * 策略治理等级。
                 * @example `low`
                 */
                Severity: string;
            }[];
            /**
             * 关联集群当前策略治理审计日志。
             */
            AdmitLog: {
                /**
                 * 查询结果的状态，取值：
                 * - Complete：查询已经完成，返回结果为完整结果。
                 * - Incomplete：查询已经完成，返回结果为不完整结果，需要重复请求以获得完整结果。
                 * @example `Complete`
                 */
                Progress: string;
                /**
                 * 当前查询到的日志总数。
                 * @example `100`
                 */
                Count: string;
                /**
                 * 策略治理审计日志内容。
                 */
                Logs: any[];
                /**
                 * 日志服务LogProject的名称。
                 * @example `demo`
                 */
                LogProject: string;
                /**
                 * 日志服务LogStore的名称。
                 * @example `demo`
                 */
                LogStore: string;
            };
            /**
             * 关联集群中针对不同策略类型的拦截和告警的审计计数统计列表。
             */
            Violation: {
                /**
                 * 关联集群中当前被拦截和告警两种处理类型下不同治理等级的违规计数。
                 */
                TotalViolations: {
                    /**
                     * 被拦截的不同治理等级的违规计数统计。
                     */
                    Deny: {
                        /**
                         * 策略治理等级。
                         * @example `low`
                         */
                        Severity: string;
                        /**
                         * 被拦截的事件计数。
                         * @example `2`
                         */
                        Violations: number;
                    }[];
                    /**
                     * 告警模式下不同治理等级的违规计数统计。
                     */
                    Warn: {
                        /**
                         * 策略治理等级。
                         * @example `low`
                         */
                        Severity: string;
                        /**
                         * 被拦截的事件计数。
                         * @example `2`
                         */
                        Violations: string;
                    }[];
                };
                /**
                 * 关联集群中针对不同策略类型的拦截和告警的审计计数统计列表。
                 */
                Violations: {
                    /**
                     * 被拦截的不同策略类型的审计计数。
                     */
                    Deny: {
                        /**
                         * 策略治理规则名称。
                         * @example `ACKPSPCapabilities`
                         */
                        PolicyName: string;
                        /**
                         * 规则模板描述。
                         * @example `Restricts secrets used in pod envs
                        `
                         */
                        PolicyDescription: string;
                        /**
                         * 策略治理等级。
                         * @example `low`
                         */
                        Severity: string;
                        /**
                         * 关联集群中对应规则类型下被拦截的违规计数统计。
                         * @example `2`
                         */
                        Violations: number;
                    }[];
                    /**
                     * 告警模式下不同治理等级的违规计数统计。
                     */
                    Warn: {
                        /**
                         * 策略治理规则名称。
                         * @example `ACKPSPCapabilities`
                         */
                        PolicyName: string;
                        /**
                         * 规则模板描述。
                         * @example `Restricts secrets used in pod envs
                        `
                         */
                        PolicyDescription: string;
                        /**
                         * 策略治理等级。
                         * @example `low`
                         */
                        Severity: string;
                        /**
                         * 关联集群中对应规则类型下被告警的违规计数统计。
                         * @example `2`
                         */
                        Violations: number;
                    }[];
                };
            };
        };
    }[];
}
