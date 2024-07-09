export interface DescribeApplicationScalingRulesResponse {
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
     * 请求唯一ID。
     * @example `a5281053-08e4-47a5-b2ab-5c0323de7b5a`
     */
    RequestId: string;
    /**
     * 应用的弹性伸缩策略。
     */
    AppScalingRules: {
        /**
         * 当前页。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页展示的弹性策略数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 弹性策略总的数量。
         * @example `20`
         */
        TotalSize: number;
        /**
         * 应用的弹性策略查询结果。
         */
        Result: {
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
             * 弹性策略的启用状态。
             * - **true**：启用
             * - **false**：禁用
             * @example `true`
             */
            ScaleRuleEnabled: boolean;
            /**
             * 弹性策略类型，仅支持trigger类型。
             * @example `trigger`
             */
            ScaleRuleType: string;
            /**
             * 此参数已废弃。
             * @example `1`
             */
            MinReplicas: number;
            /**
             * 弹性策略的名称。
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
                     * @example `asd`
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
                     * @example `cron-trigger`
                     */
                    Name: string;
                }[];
            };
            Behaviour: {
                ScaleUp: {
                    StabilizationWindowSeconds: number;
                    SelectPolicy: string;
                    Policies: {
                        PeriodSeconds: number;
                        Type: string;
                        Value: string;
                    }[];
                };
                ScaleDown: {
                    StabilizationWindowSeconds: number;
                    SelectPolicy: string;
                    Policies: {
                        PeriodSeconds: number;
                        Type: string;
                        Value: string;
                    }[];
                };
            };
        }[];
    };
}
