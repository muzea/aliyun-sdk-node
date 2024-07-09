export interface CreateGroupMetricRulesRequest {
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `3607****`
     */
    "GroupId": number;
    /**
     * 应用分组的监控项规则列表。
     */
    "GroupMetricRules"?: {
        /**
         * 普通级别报警阈值。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `10`
         */
        Escalations.Info.Threshold: string;
        /**
         * 监控项名称。
         * N的取值范围：1~200。
         * 关于如何获取监控项名称，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
         * @example `cpu_total`
         */
        MetricName: string;
        /**
         * 警告级别报警阈值。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `20`
         */
        Escalations.Warn.Threshold: string;
        /**
         * 报警规则的生效时间范围。N的取值范围：1~200。
         * @example `05:31-23:59`
         */
        EffectiveInterval: string;
        /**
         * 报警规则的失效时间范围。N的取值范围：1~200。
         * @example `00:00-05:30`
         */
        NoEffectiveInterval: string;
        /**
         * 报警规则ID。
         * N的取值范围：1~200。
         * @example `456789`
         */
        RuleId: string;
        /**
         * 发送紧急报警通知需要监控指标达到报警阈值的次数。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `3`
         */
        Escalations.Critical.Times: number;
        /**
         * 指定资源的监控维度。
         * 格式：`key:value`键值对形式的集合，例如：`{"userId":"120886317861****"}`和`{"instanceId":"i-2ze2d6j5uhg20x47****"}`。
         * @example `[{"instanceId":"i-m5e1qg6uo38rztr4****"}]`
         */
        Dimensions: string;
        /**
         * 触发紧急级别报警通知的阈值。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `90`
         */
        Escalations.Critical.Threshold: string;
        /**
         * 紧急级别报警统计方法。
         * N的取值范围：1~200。
         * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `Average`
         */
        Escalations.Critical.Statistics: string;
        /**
         * 警告级别阈值比较符。取值：
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
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `GreaterThanOrEqualToThreshold`
         */
        Escalations.Warn.ComparisonOperator: string;
        /**
         * 发送普通报警通知需要监控指标达到报警阈值的次数。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `1`
         */
        Escalations.Info.Times: number;
        /**
         * 报警通知的沉默周期。N的取值范围：1~200。
         * 单位：秒。默认值：86400。最小值：3600。
         * @example `86400`
         */
        SilenceTime: number;
        /**
         * 报警发生回调时的URL地址。N的取值范围：1~200。
         * 填写公网可访问的URL地址，云监控会将报警信息通过POST请求推送到该地址，目前仅支持HTTP协议。
         * @example `https://www.aliyun.com`
         */
        Webhook: string;
        /**
         * 云产品的数据命名空间。
         * N的取值范围：1~200。
         * 关于如何获取云产品的数据命名空间，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
         * @example `acs_ecs_dashboard`
         */
        Namespace: string;
        /**
         * 报警邮件主题。
         * N的取值范围：1~200。
         * @example `ECS实例`
         */
        EmailSubject: string;
        /**
         * 监控数据的上报周期。
         * N的取值范围：1~200。
         * `Period`的取值为60或60的整数倍。单位：秒。默认值：300。
         * @example `60`
         */
        Period: string;
        /**
         * 报警规则名称。
         * N的取值范围：1~200。
         * @example `ECS_Rule1`
         */
        RuleName: string;
        /**
         * 普通级别报警统计方法。
         * N的取值范围：1~200。
         * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `Average`
         */
        Escalations.Info.Statistics: string;
        /**
         * 发送警告报警通知需要监控指标达到报警阈值的次数。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `3`
         */
        Escalations.Warn.Times: number;
        /**
         * 普通级别阈值比较符。取值：
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
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `GreaterThanOrEqualToThreshold`
         */
        Escalations.Info.ComparisonOperator: string;
        /**
         * 报警规则的探测周期。
         * N的取值范围：1~200。
         * 单位：秒。秒默认为监控项的最小频率。
         * > 建议报警规则的探测周期和数据上报周期保持一致。如果报警规则的探测周期小于数据上报周期，会因为数据不足而不能触发报警。
         * @example `60`
         */
        Interval: string;
        /**
         * 云产品名称缩写。
         * N的取值范围：1~200。
         * 关于如何获取云产品名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
         * @example `ECS`
         */
        Category: string;
        /**
         * 紧急级别阈值比较符。取值：
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
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `GreaterThanOrEqualToThreshold`
         */
        Escalations.Critical.ComparisonOperator: string;
        /**
         * 警告级别报警统计方法。
         * N的取值范围：1~200。
         * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `Average`
         */
        Escalations.Warn.Statistics: string;
        /**
         * 无监控数据时报警的处理方式。取值：
         * - KEEP_LAST_STATE（默认值）：不做任何处理。
         * - INSUFFICIENT_DATA：报警内容为无数据。
         * - OK：正常。
         * N的取值范围：1~200。
         * @example `KEEP_LAST_STATE`
         */
        NoDataPolicy: string;
        /**
         * 报警联系人组。
         * N的取值范围：1~200。
         * 关于如何获取报警联系人组，请参见[DescribeContactGroupList](~~114922~~)。
         * @example `ECS_Group`
         */
        ContactGroups: string;
        /**
         * 报警规则的标签键。
         */
        Labels: {
            /**
             * 报警规则的标签键。报警通知中会包含标签。
             * N的取值范围：1~200。
             * @example `key1`
             */
            Key: string;
            /**
             * 报警规则的标签值。报警通知中会包含标签。
             * N的取值范围：1~200。
             * @example `value1`
             */
            Value: string;
        }[];
        /**
         * 高级设置。
         * 格式：{"key1":"value1","key2":"value2"}，例如：{"NotSendOK":true}，表示是否发送报警恢复通知，key为NotSendOK，value为true（不发送）或false（默认发送）。
         * @example `{
              "NotSendOK": true
        }`
         */
        Options: string;
    }[];
}
