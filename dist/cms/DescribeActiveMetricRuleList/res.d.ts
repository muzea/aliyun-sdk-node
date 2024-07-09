export interface DescribeActiveMetricRuleListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F82E6667-7811-4BA0-842F-5B2DC42BBAAD`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Datapoints: {
        /**
         * 报警规则列表。
         */
        Alarm: {
            /**
             * 通道沉默时间。
             * 单位：秒。
             * @example `86400`
             */
            SilenceTime: string;
            /**
             * 监控指标名称。
             * @example `cpu_total`
             */
            MetricName: string;
            /**
             * 报警重试次数。
             * @example `3`
             */
            EvaluationCount: string;
            /**
             * URL回调地址。
             * @example `https://www.aliyun.com`
             */
            Webhook: string;
            /**
             * 报警规则的启用状态。
             * @example `Enable`
             */
            State: string;
            /**
             * 报警联系人组。
             * @example `ECS_Group`
             */
            ContactGroups: string;
            /**
             * 云产品的命名空间。
             * @example `acs_ecs_dashboard`
             */
            Namespace: string;
            /**
             * 报警规则名称。
             * @example `SystemDefault_acs_rds_dashboard_CpuUsage`
             */
            RuleName: string;
            /**
             * 报警规则ID。
             * @example `a151cd6023eacee2f0978e03863cc1697c89508****`
             */
            RuleId: string;
            /**
             * 监控数据的聚合周期。
             * 单位：秒。
             * @example `60`
             */
            Period: string;
            /**
             * 报警规则比较符。取值：
             * - `>`
             * - `<`
             * - `>=`
             * - `<=`
             * - `=`
             * - `=`
             * @example `>`
             */
            ComparisonOperator: string;
            /**
             * 报警规则失效时间。
             * 单位：小时。例如：23表示`23:59:59`。
             * @example `24`
             */
            EndTime: string;
            /**
             * 报警规则生效起始时间。
             * 单位：小时。例如：00表示`00：00：00`。
             * @example `00`
             */
            StartTime: string;
            /**
             * 报警阈值。
             * @example `90`
             */
            Threshold: string;
            /**
             * 统计方法。
             * @example `Average`
             */
            Statistics: string;
            /**
             * 报警规则的启用状态。取值：
             * - true：启用。
             * - false：禁用。
             * @example `true`
             */
            Enable: string;
        }[];
    };
    AlertList: {
        /**
         * 报警规则列表。该列表的结构和获取报警规则列表保持统一。
         */
        Alert: {
            /**
             * 通道沉默时间。
             * 单位：秒。
             * @example `86400`
             */
            SilenceTime: string;
            /**
             * 监控项的名称。
             * @example `cpu_total`
             */
            MetricName: string;
            /**
             * URL回调地址。
             * @example `http://www.aliyun.com`
             */
            Webhook: string;
            /**
             * 报警联系人组。
             * @example `ECS_Group`
             */
            ContactGroups: string;
            /**
             * 云服务的命名空间。
             * @example `acs_ecs_dashboard`
             */
            Namespace: string;
            /**
             * 报警规则的生效时间段。
             * @example `00:00-23:59`
             */
            EffectiveInterval: string;
            /**
             * 报警不生效的时间段。
             * @example `00:00-06:00`
             */
            NoEffectiveInterval: string;
            /**
             * 发送邮件的主题。
             * @example `ECS_Bucket`
             */
            MailSubject: string;
            /**
             * 报警规则名称。
             * @example `myAlert`
             */
            RuleName: string;
            /**
             * 报警规则ID。
             * @example `ruleIdxxxx`
             */
            RuleId: string;
            /**
             * 监控数据的聚合周期。
             * 单位：秒。
             * @example `60`
             */
            Period: string;
            /**
             * 报警规则状态。取值：
             * - OK：正常。
             * - ALARM：报警。
             * - INSUFFICIENT_DATA：无数据。
             * @example `OK`
             */
            AlertState: string;
            /**
             * 指定资源的监控数据。
             * @example `""`
             */
            Dimensions: string;
            /**
             * 报警规则的启用状态。取值：
             * - true：启用。
             * - false：禁用。
             * @example `true`
             */
            EnableState: boolean;
            /**
             * 报警规则关联的资源。
             * @example `[{"resource":"_ALL"}]`
             */
            Resources: string;
            /**
             * 报警分级别触发条件。
             */
            Escalations: {
                /**
                 * Info级别报警触发条件。
                 */
                Info: {
                    /**
                     * Info级别阈值比较符。取值：
                     * - GreaterThanOrEqualToThreshold：大于等于。
                     * - GreaterThanThreshold：大于。
                     * - LessThanOrEqualToThreshold：小于等于。
                     * - LessThanThreshold：小于。
                     * - NotEqualToThreshold：不等。
                     * - GreaterThanYesterday：同比昨天时间上涨。
                     * - LessThanYesterday：同比昨天时间下降。
                     * - GreaterThanLastWeek：同比上周同一时间上涨。
                     * - LessThanLastWeek：同比上周同一时间下降。
                     * - GreaterThanLastPeriod：环比上周期上涨。
                     * - LessThanLastPeriod：环比上周期下降。
                     * @example `GreaterThanThreshold`
                     */
                    ComparisonOperator: string;
                    /**
                     * Info级别连续出现次数。
                     * Info级别连续出现达到该值且超过阈值才会触发报警。
                     * @example `3`
                     */
                    Times: string;
                    /**
                     * Info级别阈值。
                     * @example `95`
                     */
                    Threshold: string;
                    /**
                     * Info级别报警统计方法。
                     * @example `Average`
                     */
                    Statistics: string;
                };
                /**
                 * Warn级别报警触发条件。
                 */
                Warn: {
                    /**
                     * Warn级别阈值比较符。取值：
                     * - GreaterThanOrEqualToThreshold：大于等于。
                     * - GreaterThanThreshold：大于。
                     * - LessThanOrEqualToThreshold：小于等于。
                     * - LessThanThreshold：小于。
                     * - NotEqualToThreshold：不等。
                     * - GreaterThanYesterday：同比昨天时间上涨。
                     * - LessThanYesterday：同比昨天时间下降。
                     * - GreaterThanLastWeek：同比上周同一时间上涨。
                     * - LessThanLastWeek：同比上周同一时间下降。
                     * - GreaterThanLastPeriod：环比上周期上涨。
                     * - LessThanLastPeriod：环比上周期下降。
                     * @example `GreaterThanThreshold`
                     */
                    ComparisonOperator: string;
                    /**
                     * Warn级别连续出现次数。
                     * Warn级别连续出现达到该值且超过阈值才会触发报警。
                     * @example `3`
                     */
                    Times: string;
                    /**
                     * Warn级别阈值。
                     * @example `80`
                     */
                    Threshold: string;
                    /**
                     * Warn级别报警统计方法。
                     * @example `Average`
                     */
                    Statistics: string;
                };
                /**
                 * Critical级别报警触发条件。
                 */
                Critical: {
                    /**
                     * Critical级别阈值比较符。取值：
                     * - GreaterThanOrEqualToThreshold：大于等于。
                     * - GreaterThanThreshold：大于。
                     * - LessThanOrEqualToThreshold：小于等于。
                     * - LessThanThreshold：小于。
                     * - NotEqualToThreshold：不等。
                     * - GreaterThanYesterday：同比昨天时间上涨。
                     * - LessThanYesterday：同比昨天时间下降。
                     * - GreaterThanLastWeek：同比上周同一时间上涨。
                     * - LessThanLastWeek：同比上周同一时间下降。
                     * - GreaterThanLastPeriod：环比上周期上涨。
                     * - LessThanLastPeriod：环比上周期下降。
                     * @example `GreaterThanThreshold`
                     */
                    ComparisonOperator: string;
                    /**
                     * Critical级别连续出现次数。Critical级别连续出现达到该值且超过阈值才会触发报警。
                     * @example `3`
                     */
                    Times: string;
                    /**
                     * Critical级别阈值。
                     * @example `99`
                     */
                    Threshold: string;
                    /**
                     * Critical级别报警统计方法。
                     * @example `Average`
                     */
                    Statistics: string;
                };
            };
        }[];
    };
}
