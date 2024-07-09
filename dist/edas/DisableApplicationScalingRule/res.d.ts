export interface DisableApplicationScalingRuleResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求唯一标识ID。
     * @example `5d6fa0bc-cc3**********`
     */
    RequestId: string;
    /**
     * 弹性伸缩策略。
     */
    AppScalingRule: {
        /**
         * 更新弹性伸缩策略的时间戳。
         * @example `23212323123`
         */
        UpdateTime: number;
        /**
         * 创建弹性伸缩策略的时间戳。
         * @example `23212323123`
         */
        CreateTime: number;
        /**
         * 弹性伸缩策略所属应用的应用ID。
         * @example `78194c76-3dca-418e-a263-cccd1ab4****`
         */
        AppId: string;
        /**
         * 弹性伸缩策略最近一次被禁用的时间戳。
         * @example `23212323123`
         */
        LastDisableTime: number;
        /**
         * 此参数已废弃。
         * @example `1`
         */
        MaxReplicas: number;
        /**
         * 弹性伸缩策略的启用状态。
         * - **true**：启用
         * - **false**：禁用
         * @example `true`
         */
        ScaleRuleEnabled: boolean;
        /**
         * 弹性伸缩策略类型，只支持trigger。
         * @example `trigger`
         */
        ScaleRuleType: string;
        /**
         * 此参数已废弃。
         * @example `1`
         */
        MinReplicas: number;
        /**
         * 弹性伸缩策略的名称。
         * @example `cron-trigger`
         */
        ScaleRuleName: string;
        /**
         * 此参数已废弃。
         */
        Metric: {
            /**
             * 此参数已废弃。
             * @example `1`
             */
            MinReplicas: number;
            /**
             * 此参数已废弃。
             * @example `12`
             */
            MaxReplicas: number;
            /**
             * 此参数已废弃。
             */
            Metrics: {
                /**
                 * 此参数已废弃。
                 * @example `1`
                 */
                MetricTargetAverageUtilization: number;
                /**
                 * 此参数已废弃。
                 * @example `1`
                 */
                MetricType: string;
            }[];
        };
        /**
         * 触发器配置。
         */
        Trigger: {
            /**
             * 最小副本数，不能低于0。
             * @example `1`
             */
            MinReplicas: number;
            /**
             * 最大副本数，不能超过1000。
             * @example `12`
             */
            MaxReplicas: number;
            /**
             * 触发器。
             */
            Triggers: {
                /**
                 * 触发器类型，只支持cron和app_metric。
                 * @example `cron`
                 */
                Type: string;
                /**
                 * 触发器元信息。
                 * @example `{"dryRun":true}`
                 */
                MetaData: string;
                /**
                 * 触发器名称。
                 * @example `cron-trigger`
                 */
                Name: string;
            }[];
        };
    };
}
