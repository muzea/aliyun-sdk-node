export interface PutResourceMetricRulesRequest {
    /**
     * 阈值报警规则列表。
     * N的取值范围：1~500。
     */
    "Rules": {
        /**
         * Info级别报警阈值。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `90`
         */
        Escalations.Info.Threshold: string;
        /**
         * 监控项名称。
         * N的取值范围：1~500。
         * 关于如何查询监控项名称，请参见[云产品监控项](~~163515~~)。
         * @example `cpu_total`
         */
        MetricName: string;
        /**
         * Warn级别报警阈值。
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `90`
         */
        Escalations.Warn.Threshold: string;
        /**
         * 报警规则的生效时间范围。
         * N的取值范围：1~500。
         * @example `00:00-23:59`
         */
        EffectiveInterval: string;
        /**
         * 报警规则的失效时间范围。
         * N的取值范围：1~500。
         * @example `00:00-06:00`
         */
        NoEffectiveInterval: string;
        /**
         * 报警规则ID。
         * N的取值范围：1~500。
         * 您可以输入新的报警规则ID，也可以使用云监控已存在的报警规则ID。关于如何查询报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
         * > 输入新的报警规则ID，表示创建一条阈值报警规则。
         * @example `a151cd6023eacee2f0978e03863cc1697c89508****`
         */
        RuleId: string;
        /**
         * Critical级别报警重试次数。
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `3`
         */
        Escalations.Critical.Times: number;
        /**
         * Critical级别报警阈值。
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `90`
         */
        Escalations.Critical.Threshold: string;
        /**
         * Critical级别报警统计方法。
         * N的取值范围：1~500。
         * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `Average`
         */
        Escalations.Critical.Statistics: string;
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
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `GreaterThanOrEqualToThreshold`
         */
        Escalations.Warn.ComparisonOperator: string;
        /**
         * Info级别报警重试次数。
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `3`
         */
        Escalations.Info.Times: number;
        /**
         * 资源信息，例如：`[{"instanceId":"i-uf6j91r34rnwawoo****"}]`、`[{"userId":"100931896542****"}]`。
         * N的取值范围：1~500。
         * 关于资源信息支持的维度Dimensions，请参见[云产品监控项](~~163515~~)。
         * @example `[{"instanceId":"i-uf6j91r34rnwawoo****"}]`
         */
        Resources: string;
        /**
         * 通道沉默周期。
         * 单位：秒，默认值：86400。
         * N的取值范围：1~500。
         * > 通道沉默周期是指报警发生后未恢复正常，间隔多久重新发送一次报警通知。
         * @example `86400`
         */
        SilenceTime: number;
        /**
         * 报警发生回调时指定的URL地址，向URL发送POST请求。
         * N的取值范围：1~500。
         * @example `https://alert.aliyun.com.com:8080/callback`
         */
        Webhook: string;
        /**
         * 报警联系组。报警通知会发送给该报警联系组中的报警联系人。
         * N的取值范围：1~500。
         * > 报警联系组是一组报警联系人，可以包含一个或多个报警联系人。关于如何创建报警联系人和报警联系组，请参见[PutContact](~~114923~~)和[PutContactGroup](~~114929~~)。
         * @example `ECS_Group`
         */
        ContactGroups: string;
        /**
         * 云产品的数据命名空间。
         * N的取值范围：1~500。
         * 关于如何查询云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
         * @example `acs_ecs_dashboard`
         */
        Namespace: string;
        /**
         * 报警邮件主题。
         * N的取值范围：1~500。
         * @example `ECS实例报警`
         */
        EmailSubject: string;
        /**
         * 监控项的统计周期。
         * 单位：秒。默认为监控项的原始上报周期。
         * N的取值范围：1~500。
         * >关于如何查询监控项的统计周期，请参见[云产品监控项](~~163515~~)。
         * @example `60`
         */
        Period: string;
        /**
         * 报警规则名称。
         * N的取值范围：1~500。
         * 您可以输入新的报警规则名称，也可以使用云监控已存在的报警规则名称。关于如何查询报警规则名称，请参见[DescribeMetricRuleList](~~114941~~)。
         * > 输入新的报警规则名称，表示创建一条阈值报警规则。
         * @example `test123`
         */
        RuleName: string;
        /**
         * Info级别报警统计方法。
         * N的取值范围：1~500。
         * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `Average`
         */
        Escalations.Info.Statistics: string;
        /**
         * Warn级别报警重试次数。
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `3`
         */
        Escalations.Warn.Times: number;
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
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `GreaterThanOrEqualToThreshold`
         */
        Escalations.Info.ComparisonOperator: string;
        /**
         * 报警规则的触发周期。
         * 单位：秒。
         * N的取值范围：1~500。
         * >关于如何查询监控项的统计周期，请参见[云产品监控项](~~163515~~)。
         * @example `60`
         */
        Interval: string;
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
         * N的取值范围：1~500。
         * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
         * @example `GreaterThanOrEqualToThreshold`
         */
        Escalations.Critical.ComparisonOperator: string;
        /**
         * Warn级别报警统计方法。
         * N的取值范围：1~500。
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
         * N的取值范围：1~500。
         * @example `KEEP_LAST_STATE`
         */
        NoDataPolicy: string;
        /**
         * 当监控项达到报警条件并进行报警时，标签同时写入监控项，在报警通知中进行展示。
         */
        Labels: {
            /**
             * 标签键。
             * @example `tagKey1`
             */
            Key: string;
            /**
             * 标签值。
             * > 标签值支持模板参数，将模板参数替换为实际标签值。
             * @example `ECS`
             */
            Value: string;
        }[];
    }[];
}
