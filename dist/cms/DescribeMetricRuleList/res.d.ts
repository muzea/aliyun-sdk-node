export interface DescribeMetricRuleListResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `386C6712-335F-5054-930A-CC92B851ECBA`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    Total: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Alarms: {
        /**
         * 报警规则列表。
         */
        Alarm: {
            /**
             * 通道沉默周期。单位：秒。默认值：86400，最小值：3600。
             * 监控数据持续超过报警规则阈值时，每个沉默周期内只发送一次报警通知。
             * @example `86400`
             */
            SilenceTime: number;
            /**
             * 监控项名称。
             * @example `cpu_total`
             */
            MetricName: string;
            /**
             * 报警发生回调时的URL地址。云监控会将报警信息通过POST请求推送到该地址，目前仅支持HTTP协议。
             * @example `https://www.aliyun.com`
             */
            Webhook: string;
            /**
             * 报警联系组。
             * @example `ECS_Alarm`
             */
            ContactGroups: string;
            /**
             * 报警规则类型。取值：METRIC，表示时序指标报警规则。
             * @example `METRIC`
             */
            SourceType: string;
            /**
             * 云服务的命名空间。
             * @example `acs_ecs_dashboard`
             */
            Namespace: string;
            /**
             * 报警邮件主题。
             * @example `"${serviceType}-${metricName}-${levelDescription}通知（${dimensions}）"`
             */
            MailSubject: string;
            /**
             * 报警规则的失效时间范围。
             * @example `00:00-05:30`
             */
            NoEffectiveInterval: string;
            /**
             * 报警规则的生效时间范围。
             * @example `05:31-23:59`
             */
            EffectiveInterval: string;
            /**
             * 报警规则名称。
             * @example `Rule_01`
             */
            RuleName: string;
            /**
             * 报警规则状态。取值：
             * - OK：正常。
             * - ALARM：报警。
             * - INSUFFICIENT_DATA：无数据。
             * @example `OK`
             */
            AlertState: string;
            /**
             * 统计周期。
             * @example `60`
             */
            Period: string;
            /**
             * 报警规则ID。
             * @example `applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****`
             */
            RuleId: string;
            /**
             * 应用分组名称。
             * > 如果报警规则关联到应用分组，此处显示该参数。
             * @example `ECS_Group`
             */
            GroupName: string;
            /**
             * 应用分组ID。
             * @example `7301****`
             */
            GroupId: string;
            /**
             * 报警规则维度。
             * @example `[{"instanceId":"i-2ze2d6j5uhg20x47****"}]`
             */
            Dimensions: string;
            /**
             * 启用状态。取值：
             * - true：启用。
             * - false：禁用。
             * @example `true`
             */
            EnableState: boolean;
            /**
             * 报警规则关联的资源。
             * @example `[{\"instanceId\":\"i-2ze2d6j5uhg20x47****\"}]`
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
                     * - NotEqualToThreshold：不等于。
                     * - GreaterThanYesterday：同比昨天时间上涨。
                     * - LessThanYesterday：同比昨天时间下降。
                     * - GreaterThanLastWeek：同比上周同一时间上涨。
                     * - LessThanLastWeek：同比上周同一时间下降。
                     * - GreaterThanLastPeriod：环比上周期上涨。
                     * - LessThanLastPeriod：环比上周期下降。
                     * @example `GreaterThanOrEqualToThreshold`
                     */
                    ComparisonOperator: string;
                    /**
                     * Info级别报警的前置条件。当参数ComparisonOperator设置为同比或环比时，与该参数共同起作用。
                     * 例如：该参数设置为$Average>80，ComparisonOperator设置为GreaterThanYesterday，Threshold设置为10，表示当平均值大于80且环比昨天上涨10%时，触发报警。
                     * > $Average>0中的$Average为一个占位符，格式为`$监控结果字段值`，云监控会将其替换为对应的统计值或原始的监控值。
                     * @example `$Average>80`
                     */
                    PreCondition: string;
                    /**
                     * Info级别报警连续出现次数。报警连续出现这个次数，且超过阈值才会触发报警。
                     * @example `3`
                     */
                    Times: number;
                    /**
                     * Info级别报警阈值。
                     * @example `90`
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
                     * - NotEqualToThreshold：不等于。
                     * - GreaterThanYesterday：同比昨天时间上涨。
                     * - LessThanYesterday：同比昨天时间下降。
                     * - GreaterThanLastWeek：同比上周同一时间上涨。
                     * - LessThanLastWeek：同比上周同一时间下降。
                     * - GreaterThanLastPeriod：环比上周期上涨。
                     * - LessThanLastPeriod：环比上周期下降。
                     * @example `GreaterThanOrEqualToThreshold`
                     */
                    ComparisonOperator: string;
                    /**
                     * Warn级别报警的前置条件。当参数ComparisonOperator设置为同比或环比时，与该参数共同起作用。
                     * 例如：该参数设置为$Average>80，ComparisonOperator设置为GreaterThanYesterday，Threshold设置为10，表示当平均值大于80且环比昨天上涨10%时，触发报警。
                     * > $Average>0中的$Average为一个占位符，格式为`$监控结果字段值`，云监控会将其替换为对应的统计值或原始的监控值。
                     * @example `$Average>80`
                     */
                    PreCondition: string;
                    /**
                     * Warn级别报警连续出现次数。报警连续出现这个次数，且超过阈值才会触发报警。
                     * @example `3`
                     */
                    Times: number;
                    /**
                     * Warn级别报警阈值。
                     * @example `90`
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
                     * - NotEqualToThreshold：不等于。
                     * - GreaterThanYesterday：同比昨天时间上涨。
                     * - LessThanYesterday：同比昨天时间下降。
                     * - GreaterThanLastWeek：同比上周同一时间上涨。
                     * - LessThanLastWeek：同比上周同一时间下降。
                     * - GreaterThanLastPeriod：环比上周期上涨。
                     * - LessThanLastPeriod：环比上周期下降。
                     * @example `GreaterThanOrEqualToThreshold`
                     */
                    ComparisonOperator: string;
                    /**
                     * Critical级别报警的前置条件。当参数ComparisonOperator设置为同比或环比时，与该参数共同起作用。
                     * 例如：该参数设置为$Average>80，ComparisonOperator设置为GreaterThanYesterday，Threshold设置为10，表示当平均值大于80且环比昨天上涨10%时，触发报警。
                     * > $Average>0中的$Average为一个占位符，格式为`$监控结果字段值`，云监控会将其替换为对应的统计值或原始的监控值。
                     * @example `$Average>80`
                     */
                    PreCondition: string;
                    /**
                     * Critical级别报警连续出现次数。报警连续出现这个次数，且超过阈值才会触发报警。
                     * @example `3`
                     */
                    Times: number;
                    /**
                     * Critical级别报警阈值。
                     * @example `90`
                     */
                    Threshold: string;
                    /**
                     * Critical级别报警统计方法。
                     * @example `Average`
                     */
                    Statistics: string;
                };
            };
            /**
             * 无监控数据时报警的处理方式。取值：
             * - KEEP_LAST_STATE（默认值）：不做任何处理。
             * - INSUFFICIENT_DATA：报警内容为无数据。
             * - OK：正常。
             * @example `KEEP_LAST_STATE`
             */
            NoDataPolicy: string;
            /**
             * 多指标的报警条件。
             * > 单指标和多指标互斥，不能同时设置。
             */
            CompositeExpression: {
                /**
                 * 报警级别。取值：
                 * - Critical：严重。
                 * - Warn：警告。
                 * - Info：信息。
                 * @example `Critical`
                 */
                Level: string;
                ExpressionList: {
                    /**
                     * 标准创建的报警条件列表。
                     */
                    ExpressionList: {
                        /**
                         * 云产品的监控项名称。
                         * @example `cpu_total`
                         */
                        MetricName: string;
                        /**
                         * 监控项的聚合周期。
                         * 单位：秒。
                         * @example `60`
                         */
                        Period: number;
                        /**
                         * 监控项的统计方法。取值：
                         * - $Maximum：最大值。
                         * - $Minimum：最小值。
                         * - $Average：平均值。
                         * - $Availability：可用率（通常用于站点监控）。
                         * > `$`为监控项的统一前缀符号。支持的云产品，请参见[云产品监控项](~~163515~~)。
                         * @example `$Maximum`
                         */
                        Statistics: string;
                        /**
                         * 阈值比较符。取值：
                         * - GreaterThanOrEqualToThreshold：大于等于。
                         * - GreaterThanThreshold：大于。
                         * - LessThanOrEqualToThreshold：小于等于。
                         * - LessThanThreshold：小于。
                         * - NotEqualToThreshold：不等于。
                         * - GreaterThanYesterday：同比昨天时间上涨。
                         * - LessThanYesterday：同比昨天时间下降。
                         * - GreaterThanLastWeek：同比上周同一时间上涨。
                         * - LessThanLastWeek：同比上周同一时间下降。
                         * - GreaterThanLastPeriod：环比上周期上涨。
                         * - LessThanLastPeriod：环比上周期下降。
                         * @example `GreaterThanOrEqualToThreshold`
                         */
                        ComparisonOperator: string;
                        /**
                         * 报警阈值。
                         * @example `90`
                         */
                        Threshold: string;
                    }[];
                };
                /**
                 * 多指标报警条件之间的关系。取值：
                 * - `&&`：当所有指标都符合报警条件时，才触发报警。当ExpressionList下各表达式均为`true`时，才触发报警。
                 * - `||`：其中一个指标符合报警条件，即触发报警。
                 * @example `||`
                 */
                ExpressionListJoin: string;
                /**
                 * 表达式创建的报警条件。包括但不限于以下情况：
                 * - 为部分资源设置报警黑名单，例如：`$instanceId != 'i-io8kfvcpp7x5****' ``&&`` $Average > 50`，表示当报警规则中的实例`i-io8kfvcpp7x5****`的`Average`大于50时，也不会产生报警。
                 * - 对规则中的指定实例设置特殊报警阈值，例如：`$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`，表示当报警规则中的实例`i-io8kfvcpp7x5****`的`Average`大于80时，才报警，其他实例的`Average`大于50，即可报警。
                 * - 对规则中超过阈值的实例数量进行限制，例如：`count($Average > 20) > 3`，表示当报警规则中的`Average`大于20的实例数大于3个时，才进行报警。
                 * @example `$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`
                 */
                ExpressionRaw: string;
                /**
                 * 发出报警通知需要达到报警条件的次数。
                 * @example `3`
                 */
                Times: number;
            };
            Labels: {
                /**
                 * 报警规则标签。
                 */
                Labels: {
                    /**
                     * 报警规则的标签键。
                     * @example `cmsRuleKey`
                     */
                    Key: string;
                    /**
                     * 报警规则的标签值。
                     * @example `cmsRuleValue`
                     */
                    Value: string;
                }[];
            };
            /**
             * Prometheus报警。
             * > 仅当您为企业云监控创建Prometheus报警规则，需要设置该参数。
             */
            Prometheus: {
                /**
                 * PromQL查询语句。
                 * > 通过PromQL查询语句获取的数据即为报警数据，请您在该语句中携带报警阈值。
                 * @example `CpuUsage{instanceId="xxxx"}[1m]>90`
                 */
                PromQL: string;
                /**
                 * 报警级别。取值：
                 * - Critical：严重。
                 * - Warn：警告。
                 * - Info：信息。
                 * @example `Critical`
                 */
                Level: string;
                /**
                 * 发出报警通知需要达到报警条件的次数。
                 * @example `3`
                 */
                Times: number;
                Annotations: {
                    /**
                     * Prometheus报警时，将注释的键和值进行渲染，易于您对监控项或报警规则的理解。
                     * > 该功能等同于Prometheus的Annotation。
                     */
                    Annotations: {
                        /**
                         * 注释的键。
                         * @example `summary`
                         */
                        Key: string;
                        /**
                         * 注释的值。
                         * @example `{{ $labels.instance }} CPU usage above 10% {current value: {{ humanizePercentage $value }} }`
                         */
                        Value: string;
                    }[];
                };
            };
        }[];
    };
}
