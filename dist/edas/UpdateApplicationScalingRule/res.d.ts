export interface UpdateApplicationScalingRuleResponse {
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
     * 请求唯一表示ID。
     * @example `a5281053-08e4-47a5-b2ab-5c0323de7b5a`
     */
    RequestId: string;
    /**
     * 弹性伸缩策略。
     */
    AppScalingRule: {
        /**
         * 更新弹性伸缩策略的时间戳，单位毫秒。
         * @example `1574251601785`
         */
        UpdateTime: number;
        /**
         * 创建弹性伸缩策略的时间戳，单位毫秒。
         * @example `1574251601785`
         */
        CreateTime: number;
        /**
         * 弹性伸缩策略所属应用的应用ID。
         * @example `78194c76-3dca-418e-a263-cccd1ab4****`
         */
        AppId: string;
        /**
         * 弹性伸缩策略最近一次被禁用的时间戳，单位毫秒。
         * @example `1574251601785`
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
         * 弹性伸缩策略类型，仅支持trigger类型。
         * @example `trigger`
         */
        ScaleRuleType: string;
        /**
         * 此参数已废弃。
         * @example `1`
         */
        MinReplicas: number;
        /**
         * 弹性伸缩的策略名称。
         * @example `cpu-trigger`
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
             * @example `1`
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
                 * @example `cpu`
                 */
                MetricType: string;
            }[];
        };
        /**
         * 触发器配置列表。
         */
        Trigger: {
            /**
             * 最小副本数，不能低于0。
             * @example `1`
             */
            MinReplicas: number;
            /**
             * 最大副本数，不能超过1000。
             * @example `122`
             */
            MaxReplicas: number;
            /**
             * 触发器配置列表。
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
                 * @example `cpu`
                 */
                Name: string;
            }[];
        };
        /**
         * 弹性行为配置。
         */
        Behaviour: {
            /**
             * 弹性扩容行为配置。
             */
            ScaleUp: {
                /**
                 * 扩容冷却时间。取值范围\[0, 3600\]，单位为秒。默认为0秒。
                 * @example `0`
                 */
                StabilizationWindowSeconds: number;
                /**
                 * 弹性扩容步长策略，可选值Max、Min、Disable。
                 * @example `Max`
                 */
                SelectPolicy: string;
                /**
                 * 策略配置。
                 */
                Policies: {
                    /**
                     * 检查执行的周期，取值范围[0, 1800]，单位为秒。
                     * @example `15`
                     */
                    PeriodSeconds: number;
                    /**
                     * 策略类型，可为Pods或Percent。
                     * @example `Pods`
                     */
                    Type: string;
                    /**
                     * 弹性行为的策略值，大于零的整数。若策略类型为Pods，则该值表示Pods数量；若策略类型为Percent，则该值表示百分比，允许超过100%。
                     * @example `10`
                     */
                    Value: string;
                }[];
            };
            /**
             * 弹性缩容行为配置。
             */
            ScaleDown: {
                /**
                 * 缩容冷却时间。取值范围\[0, 3600\]，单位为秒。默认为300秒。
                 * @example `300`
                 */
                StabilizationWindowSeconds: number;
                /**
                 * 弹性缩容步长策略，可选值Max、Min、Disable。
                 * @example `Max`
                 */
                SelectPolicy: string;
                /**
                 * 策略配置。
                 */
                Policies: {
                    /**
                     * 检查执行的周期，取值范围[0, 1800]，单位为秒。
                     * @example `15`
                     */
                    PeriodSeconds: number;
                    /**
                     * 策略类型，可为Pods或Percent。
                     * @example `Pods`
                     */
                    Type: string;
                    /**
                     * 弹性行为的策略值，大于零的整数。若策略类型为Pods，则该值表示Pods数量；若策略类型为Percent，则该值表示百分比，允许超过100%。
                     * @example `10`
                     */
                    Value: string;
                }[];
            };
        };
    };
}
