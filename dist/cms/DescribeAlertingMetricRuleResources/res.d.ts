export interface DescribeAlertingMetricRuleResourcesResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0724011B-D9E0-4B2F-8C51-F17A894CC42C`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `2`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Resources: {
        /**
         * 报警规则的资源列表。
         */
        Resource: {
            /**
             * 监控项名称。
             * @example `ActiveMessages`
             */
            MetricName: string;
            /**
             * 报警重试次数。
             * @example `3`
             */
            RetryTimes: string;
            /**
             * 触发报警时监控项的值。格式为一个JSON字符串。
             * @example `{\"timestamp\":1623727500000,\"Sum\":926,\"value\":463,\"Maximum\":463,\"Minimum\":463,\"Average\":463,\"SampleCount\":2,\"userId\":\"120886317861****\",\"region\":\"cn-huhehaote\",\"queue\":\"test-0128\"}`
             */
            MetricValues: string;
            /**
             * 云产品的数据命名空间。
             * @example `acs_mns_new`
             */
            Namespace: string;
            /**
             * 报警规则名称。
             * @example `test123456789`
             */
            RuleName: string;
            /**
             * 报警规则ID。
             * @example `putNewAlarm_user_7e78d765-0e3e-4671-ba6d-7ce39108****`
             */
            RuleId: string;
            /**
             * 云产品类型。
             * @example `mns`
             */
            ProductCategory: string;
            /**
             * 资源被关联到报警规则的时间戳。
             * 单位：毫秒。
             * @example `1622427900000`
             */
            StartTime: string;
            /**
             * 报警的资源。
             * @example `userId=120886317861****,region=cn-huhehaote,queue=test-0128`
             */
            Resource: string;
            /**
             * 最后一次修改报警规则的时间戳。
             * 单位：毫秒。
             * @example `1622827900000`
             */
            LastModifyTime: string;
            /**
             * 应用分组ID。
             * >如果报警规则与指定应用分组关联，则显示该应用分组ID。
             * @example `7671****`
             */
            GroupId: string;
            /**
             * 维度Map，用于查询指定资源的监控数据。
             * @example `{\"region\":\"cn-huhehaote\",\"queue\":\"test-0128\",\"userId\":\"120886317861****\"}`
             */
            Dimensions: string;
            /**
             * 最后一次触发报警的时间戳。
             * 单位：毫秒。
             * @example `1622427900000`
             */
            LastAlertTime: string;
            /**
             * 报警的级别和通知方式。取值：
             * <props="china">- 2：电话+短信+邮件+钉钉机器人。</props>
             * <props="china">- 3：短信+邮件+钉钉机器人。</props>
             * <props="china">- 4：邮件+钉钉机器人。</props>
             * <props="china">- OK：无报警。</props>
             * <props="intl">- 4：邮件+钉钉机器人。</props>
             * <props="intl">- OK：无报警。</props>
             * <props="partner">- 4：邮件+钉钉机器人。</props>
             * <props="partner">- OK：无报警。</props>
             * @example `3`
             */
            Level: number;
            /**
             * 报警阈值。
             * @example `10`
             */
            Threshold: string;
            /**
             * 报警统计方法。
             * @example `Average`
             */
            Statistics: string;
            /**
             * 是否启用报警规则。取值：
             * - true：启用报警规则。
             * - false：不启用报警规则。
             * @example `true`
             */
            Enable: string;
            Escalation: {
                /**
                 * 触发报警的规则。
                 */
                Resource: {
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
                     * 阈值比较符号。取值：
                     * - `>=`
                     * - `=`
                     * - `<=`
                     * - `>`
                     * - `<`
                     * - `!=`
                     * @example `>=`
                     */
                    PreCondition: string;
                    /**
                     * 触发报警的规则描述。
                     * > 报警规则的主体，当监控数据满足报警条件时，触发报警规则。
                     * @example `$Average>=10`
                     */
                    Expression: string;
                    /**
                     * 报警重试次数。
                     * @example `1`
                     */
                    Times: number;
                    /**
                     * 该参数已废弃，无需关注。
                     * @example `无`
                     */
                    Tag: string;
                    /**
                     * 报警阈值。
                     * @example `10`
                     */
                    Threshold: string;
                    /**
                     * 报警的级别和通知方式。取值：
                     * <props="china">- 2：电话+短信+邮件+钉钉机器人。</props>
                     * <props="china">- 3：短信+邮件+钉钉机器人。</props>
                     * <props="china">- 4：邮件+钉钉机器人。</props>
                     * <props="china">- OK：无报警。</props>
                     * <props="intl">- 4：邮件+钉钉机器人。</props>
                     * <props="intl">- OK：无报警。</props>
                     * <props="partner">- 4：邮件+钉钉机器人。</props>
                     * <props="partner">- OK：无报警。</props>
                     * @example `3`
                     */
                    Level: number;
                    /**
                     * 多个监控项之间的关系。取值：
                     * - &&：当所有监控项都满足报警条件时，发送报警通知。
                     * - ||：当其中一个监控项满足报警条件时，发送报警通知。
                     * @example `&&`
                     */
                    ExpressionListJoin: string;
                    ExpressionList: {
                        /**
                         * 多指标报警规则描述。
                         */
                        ExpressionList: {
                            /**
                             * 报警级别的阈值比较符。取值：
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
                             * 监控项名称。
                             * @example `cpu_total`
                             */
                            MetricName: string;
                            /**
                             * 监控项的统计周期。单位：秒。默认为监控项的原始上报周期。
                             * @example `60`
                             */
                            Period: string;
                            /**
                             * 报警级别的统计方法。取值：
                             * - Maximum：最大值。
                             * - Minimum：最小值。
                             * - Average：平均值。
                             * @example `Average`
                             */
                            Statistics: string;
                            /**
                             * 报警阈值。
                             *
                             * @example `90`
                             */
                            Threshold: string;
                        }[];
                    };
                    /**
                     * 表达式创建的报警条件。包括但不限于以下情况：
                     * - 为部分资源设置报警黑名单，例如：`$instanceId != 'i-io8kfvcpp7x5****' ``&&`` $Average > 50`，表示当报警规则中的实例`i-io8kfvcpp7x5****`的`Average`大于50时，也不会产生报警。
                     * - 对规则中的指定实例设置特殊报警阈值，例如：`$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`，表示当报警规则中的实例`i-io8kfvcpp7x5****`的`Average`大于80时，才报警，其他实例的`Average`大于50，即可报警。
                     * - 对规则中超过阈值的实例数量进行限制，例如：`count($Average > 20) > 3`，表示当报警规则中的`Average`大于20的实例数大于3个时，才进行报警。
                     * @example `$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`
                     */
                    ExpressionRaw: string;
                }[];
            };
        }[];
    };
}
