export interface GetScalingRulesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 更新时间的时间戳。
     * @example `1574251601785`
     */
    UpdateTime: number;
    /**
     * 请求ID。
     * @example `D16979DC-4D42-***********`
     */
    RequestId: string;
    /**
     * 数据详情。
     */
    Data: {
        /**
         * Docker集群支持超卖比例：
         * - 1：1:1比例，不超卖。
         * - 2：1:2比例超卖。
         * - 4：1:4比例超卖。
         * - 8：1:8比例超卖。
         * @example `1`
         */
        OversoldFactor: number;
        /**
         * VPC ID。
         * @example `vpc-wz9b246z******`
         */
        VpcId: string;
        /**
         * 更新时间的时间戳。
         * @example `1574251601785`
         */
        UpdateTime: number;
        /**
         * 集群类型：
         * - 0：普通Docker集群。
         * - 1：Swarm集群（已废弃）。
         * - 2：ECS集群。
         * - 3：EDAS自建K8s集群。
         * - 4：Pandora自动注册应用集群类型。
         * - 5：容器服务K8s集群。
         * @example `2`
         */
        ClusterType: number;
        RuleList: {
            /**
             * 规则列表。
             */
            Rule: {
                /**
                 * VPC ID。
                 * @example `vpc-wz9b246z******`
                 */
                VpcId: string;
                /**
                 * 修改时间的时间戳。
                 * @example `1574251601785`
                 */
                UpdateTime: number;
                /**
                 * 创建时间的时间戳。
                 * @example `1574251601801`
                 */
                CreateTime: number;
                /**
                 * 触发指标：服务时延，单位为ms。
                 * @example `1`
                 */
                Rt: number;
                /**
                 * Spec ID。
                 * @example `03f493c0-xxxx-xxxx-xxxx-12e85cadeb41`
                 */
                SpecId: string;
                /**
                 * 多可用区扩缩容策略：
                 * - PRIORITY：优先级策略。
                 * - BALANCE：均衡分布策略。
                 * @example `PRIORITY`
                 */
                MultiAzPolicy: string;
                /**
                 * 实例来源：
                 * - NEW：弹性资源。
                 * - AVAILABLE：已有资源。
                 * - AVAILABLE_FIRST：已有资源优先。
                 * @example `AVAILABLE`
                 */
                ResourceFrom: string;
                /**
                 * 规则类型：
                 * - SCALE_IN：缩容。
                 * - SCALE_OUT：扩容。
                 * @example `SCALE_OUT`
                 */
                Mode: string;
                /**
                 * 触发指标：系统负载，即指当前正在被CPU执行和等待被CPU执行的进程数。
                 * @example `1`
                 */
                LoadNum: number;
                /**
                 * 启动模版的版本号。
                 * @example `1143542`
                 */
                TemplateVersion: number;
                /**
                 * 每次扩容或缩容的实例数。
                 * @example `1`
                 */
                Step: number;
                /**
                 * 触发条件：
                 * - OR：满足任一条件即触发。
                 * - AND：满足所有条件才触发。
                 * @example `OR`
                 */
                Cond: string;
                /**
                 * 触发指标CPU使用率。
                 * @example `1`
                 */
                Cpu: number;
                /**
                 * 应用实例分组ID。
                 * @example `d8bb9d60-91b5-4cdf-****-************`
                 */
                GroupId: string;
                /**
                 * 扩容时表示分组内的最大实例数，缩容时表示分组内最小实例数。
                 * @example `2`
                 */
                InstNum: number;
                /**
                 * 应用ID。
                 * @example `33e39be9-3e5f-*********`
                 */
                AppId: string;
                /**
                 * 持续时间的时间戳。
                 * @example `1574251601`
                 */
                Duration: number;
                /**
                 * vSwitch ID列表。如果设置了多个，以半角逗号（,）分割。
                 * @example `vsw-mxxxxkxxxx4xxxxwbionj`
                 */
                VSwitchIds: string;
                /**
                 * Metric类型。
                 * @example `HSF`
                 */
                MetricType: string;
                /**
                 * 启动模版ID。
                 * @example `lt-bp1xxxxn73pxxxxf83l`
                 */
                TemplateId: string;
                /**
                 * 是否启用弹性扩容或缩容：
                 * - true：启用。
                 * - false：不启用。
                 * @example `true`
                 */
                Enable: boolean;
            }[];
        };
    };
}
