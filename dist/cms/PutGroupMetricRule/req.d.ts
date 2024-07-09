export interface PutGroupMetricRuleRequest {
    /**
     * 应用分组ID。
     * 关于如何获取应用分组ID，请参见[DescribeMonitorGroups](~~115032~~)。
     * @example `17285****`
     */
    "GroupId": string;
    /**
     * 报警规则ID。
     * - 当您为该应用分组创建报警规则时，直接输入报警规则ID。
     * - 当您修改该应用分组中的指定报警规则时，需要获取报警规则ID。关于如何获取报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `123456`
     */
    "RuleId": string;
    /**
     * 云产品名称缩写。
     * 关于如何获取云产品名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
     * @example `ECS`
     */
    "Category"?: string;
    /**
     * 报警规则名称。
     * - 当您为该应用分组创建报警规则时，直接输入报警规则名称。
     * - 当您修改该应用分组中的指定报警规则时，需要获取报警规则名称。关于如何获取报警规则名称，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `Rule_01`
     */
    "RuleName": string;
    /**
     * 云产品的命名空间。
     * 关于如何获取云产品的命名空间，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
     * @example `acs_ecs_dashboard`
     */
    "Namespace": string;
    /**
     * 监控项名称。
     * 关于如何获取监控项名称，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName": string;
    /**
     * 应用分组中报警规则的第一级维度。
     * 格式：`key:value`键值对形式的集合，例如：`{"userId":"120886317861****"}`和`{"instanceId":"i-m5e1qg6uo38rztr4****"}`。
     * @example `[{"instanceId":"i-m5e1qg6uo38rztr4****"}]`
     */
    "Dimensions"?: string;
    /**
     * 应用分组中报警规则的第二级或第三级维度。
     * 格式：`key:value`键值对形式的集合，例如：`port:80`、`/dev/xvda:d-m5e6yphgzn3aprwu****`。
     * 当报警规则的第一级维度为`{"instanceId":"i-m5e1qg6uo38rztr4****"}`时，其第二级维度为该实例中的云盘`{"/dev/xvda":"d-m5e6yphgzn3aprwu****"}`。
     * @example `{"/dev/xvda":"d-m5e6yphgzn3aprwu****"}`
     */
    "ExtraDimensionJson"?: string;
    /**
     * 报警规则的生效时间范围。
     * @example `05:31-23:59`
     */
    "EffectiveInterval"?: string;
    /**
     * 报警规则的失效时间范围。
     * @example `00:00-05:30`
     */
    "NoEffectiveInterval"?: string;
    /**
     * 通道沉默周期。
     * 单位：秒。默认值：86400。
     * @example `86400`
     */
    "SilenceTime"?: number;
    /**
     * 监控数据的上报周期。
     * `Period`的取值为60或60的整数倍。单位：秒。默认值：300。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 报警规则的探测周期。单位：秒。
     * > 建议报警规则的探测周期和数据上报周期保持一致。如果报警规则的探测周期小于数据上报周期，会因为数据不足而不能触发报警。
     * @example `60`
     */
    "Interval"?: string;
    /**
     * 报警发生回调时的URL地址。
     * 填写公网可访问的URL地址，云监控会将报警信息通过POST请求推送到该地址，目前仅支持HTTP协议。
     * @example `https://www.aliyun.com`
     */
    "Webhook"?: string;
    /**
     * 报警邮件主题。
     * @example `ECS实例`
     */
    "EmailSubject"?: string;
    /**
     * 报警联系组。
     * @example `ECS_Group`
     */
    "ContactGroups"?: string;
    /**
     * Critical级别报警统计方法。多个统计方法之间用半角逗号（,）分隔。
     * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
     * @example `Average`
     */
    "Escalations.Critical.Statistics"?: string;
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
    "Escalations.Critical.ComparisonOperator"?: string;
    /**
     * Critical级别报警阈值。
     * @example `90`
     */
    "Escalations.Critical.Threshold"?: string;
    /**
     * Critical级别报警重试次数。
     * @example `3`
     */
    "Escalations.Critical.Times"?: number;
    /**
     * Warn级别报警统计方法。多个统计方法之间用半角逗号（,）分隔。
     * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
     * @example `Average`
     */
    "Escalations.Warn.Statistics"?: string;
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
    "Escalations.Warn.ComparisonOperator"?: string;
    /**
     * Warn级别报警阈值。
     * @example `90`
     */
    "Escalations.Warn.Threshold"?: string;
    /**
     * Warn级别报警重试次数。
     * @example `3`
     */
    "Escalations.Warn.Times"?: number;
    /**
     * Info级别报警统计方法。多个统计方法之间用半角逗号（,）分隔。
     * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
     * @example `Average`
     */
    "Escalations.Info.Statistics"?: string;
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
    "Escalations.Info.ComparisonOperator"?: string;
    /**
     * Info级别报警阈值。
     * @example `90`
     */
    "Escalations.Info.Threshold"?: string;
    /**
     * Info级别报警重试次数。
     * @example `3`
     */
    "Escalations.Info.Times"?: number;
    /**
     * 无监控数据时报警的处理方式。取值：
     * - KEEP_LAST_STATE（默认值）：不做任何处理。
     * - INSUFFICIENT_DATA：报警内容为无数据。
     * - OK：正常。
     * @example `KEEP_LAST_STATE`
     */
    "NoDataPolicy"?: string;
    /**
     * 报警规则标签。
     * 报警通知中会包含标签。
     */
    "Labels"?: {
        /**
         * 报警规则的标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 报警规则的标签值。
         * @example `value1`
         */
        Value: string;
    }[];
    /**
     * 高级设置。
     * 格式：{"key1":"value1","key2":"value2"}，例如：{"NotSendOK":true}，表示是否发送报警恢复通知，key为NotSendOK，value为true（不发送）或false（默认发送）。
     * @example `{"NotSendOK":true}`
     */
    "Options"?: string;
}
