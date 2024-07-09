export interface CreateMetricRuleTemplateRequest {
    /**
     * 报警模板名称。
     * @example `Template1`
     */
    "Name": string;
    /**
     * 报警模板描述信息。
     * @example `ECS_Template1`
     */
    "Description"?: string;
    /**
     * 报警模板列表。
     */
    "AlertTemplates"?: {
        /**
         * 普通级别报警阈值。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `20`
         */
        Escalations.Info.Threshold: string;
        /**
         * 监控项名称。
         * N的取值范围：1~200。
         * 关于如何获取监控项，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
         * @example `cpu_total`
         */
        MetricName: string;
        /**
         * 报警发生回调时的URL地址。
         * N的取值范围：1~200。
         * 填写公网可访问的URL地址，云监控会将报警信息通过POST请求推送到该地址，目前仅支持HTTP协议。
         * @example `http://ww.aliyun.com`
         */
        Webhook: string;
        /**
         * 警告级别报警阈值。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `30`
         */
        Escalations.Warn.Threshold: string;
        /**
         * 云产品的数据命名空间。
         * N的取值范围：1~200。
         * 关于如何获取云产品的数据命名空间，请参见[DescribeMetricMetaList](~~98846~~)或[云产品监控项](~~163515~~)。
         * @example `acs_ecs_dashboard`
         */
        Namespace: string;
        /**
         * 监控数据的聚合周期。单位：秒。
         * 默认为监控项对应的最小周期，通常不需要指定。
         * N的取值范围：1~200。
         * @example `60`
         */
        Period: number;
        /**
         * 报警规则名称。
         * N的取值范围：1~200。
         * @example `ECS_Rule1`
         */
        RuleName: string;
        /**
         * 发送紧急报警通知需要监控指标达到报警阈值的次数。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `3`
         */
        Escalations.Critical.Times: number;
        /**
         * Dimension扩展字段的选项。
         * N的取值范围：1~200。
         * 例如：报警模板被应用到了一个应用分组中，当该参数设置为`{"disk":"/"}`，监控项（MetricName）设置为`DiskUtilization`时，表示关联报警模板的应用分组中所有实例的磁盘根分区（`"/"`) 被关联到了对应报警规则中。
         * >关于扩展字段选项的取值，请参见[DescribeMetricRuleTemplateAttribute](~~114979~~)。
         * @example `{"disk":"/"}`
         */
        Selector: string;
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
         * @example `1`
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
         * 云产品名称缩写。
         * N的取值范围：1~200。
         * 关于如何获取云产品名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
         * @example `ecs`
         */
        Category: string;
        /**
         * 触发紧急级别报警通知的阈值。
         * N的取值范围：1~200。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `30`
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
         * 警告级别报警统计方法。
         * N的取值范围：1~200。
         * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `Average`
         */
        Escalations.Warn.Statistics: string;
    }[];
}
