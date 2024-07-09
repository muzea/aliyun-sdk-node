export interface DescribePolicyGovernanceInClusterResponse {
    /**
     * 当前集群中开启的不同等级策略计数统计
     */
    on_state: {
        /**
         * 当前开启的策略种类计数
         * @example `3`
         */
        enabled_count: number;
        /**
         * 该等级下策略种类总数
         * @example `8`
         */
        total: number;
        /**
         * 策略治理等级
         * @example `high`
         */
        severity: string;
    }[];
    /**
     * 集群当前策略治理审计日志
     */
    admit_log: {
        /**
         * 查询结果的状态，取值：
         * * `Complete`：查询已经完成，返回结果为完整结果。
         * * `Incomplete`：查询已经完成，返回结果为不完整结果，需要重复请求以获得完整结果。
         * @example `Complete`
         */
        progress: string;
        /**
         * 当前查询到的日志总数
         * @example `100`
         */
        count: number;
        /**
         * 策略治理审计日志内容
         */
        log: {
            /**
             * 策略治理审计日志信息
             * @example `d4hdhs*****`
             */
            msg: string;
            /**
             * 目标集群ID
             * @example `c8155823d057948c69a****`
             */
            cluster_id: string;
            /**
             * 策略类型名称
             * @example `ACKAllowedRepos`
             */
            constraint_kind: string;
            /**
             * 目标资源名称
             * @example `nginx-deployment-basic2-84ccb74bfc-df22p`
             */
            resource_name: string;
            /**
             * 目标资源类型
             * @example `Pod`
             */
            resource_kind: string;
            /**
             * 目标资源命名空间
             * @example `default`
             */
            resource_namespace: string;
        };
    };
    /**
     * 集群中当前被拦截和告警两种处理类型下不同治理等级的违规计数。
     */
    totalViolations: {
        /**
         * 被拦截的不同治理等级的违规计数统计
         */
        deny: {
            /**
             * 策略治理等级
             * @example `high`
             */
            severity: string;
            /**
             * 被拦截的事件计数
             * @example `0`
             */
            violations: number;
        };
        /**
         * 告警模式下不同治理等级的违规计数统计
         */
        warn: {
            /**
             * 策略治理等级
             * @example `low`
             */
            severity: string;
            /**
             * 告警的事件计数
             * @example `5`
             */
            violations: number;
        };
    };
    /**
     * 集群中针对不同策略类型的拦截和告警的审计计数统计列表
     */
    violations: {
        /**
         * 被拦截的不同策略类型的审计计数
         */
        deny: {
            /**
             * 策略名称
             * @example `policy-gatekeeper-ackallowedrepos`
             */
            policyName: string;
            /**
             * 策略描述
             * @example `Requires container images to begin with a repo string from a specified list.`
             */
            policyDescription: string;
            /**
             * 集群中对应规则类型下被拦截的违规计数统计
             * @example `11`
             */
            violations: number;
            /**
             * 策略治理等级
             * @example `high`
             */
            severity: string;
        };
        /**
         * 告警模式下不同治理等级的违规计数统计
         */
        warn: {
            /**
             * 策略名称
             * @example `policy-gatekeeper-ackpspcapabilities`
             */
            policyName: string;
            /**
             * 策略描述
             * @example `Controls Linux capabilities.`
             */
            policyDescription: string;
            /**
             * 集群中对应规则类型下被告警的违规计数统计
             * @example `81`
             */
            violations: number;
            /**
             * 策略治理等级
             * @example `high`
             */
            severity: string;
        };
    };
}
