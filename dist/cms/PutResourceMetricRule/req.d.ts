export interface PutResourceMetricRuleRequest {
    /**
     * 报警规则ID。
     * 您可以输入新的报警规则ID，也可以使用云监控已存在的报警规则ID。关于如何查询报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * > 输入新的报警规则ID，表示创建一条阈值报警规则。
     * @example `a151cd6023eacee2f0978e03863cc1697c89508****`
     */
    "RuleId": string;
    /**
     * 报警规则名称。
     * 您可以输入新的报警规则名称，也可以使用云监控已存在的报警规则名称。关于如何查询报警规则名称，请参见[DescribeMetricRuleList](~~114941~~)。
     * > 输入新的报警规则名称，表示创建一条阈值报警规则。
     * @example `test123`
     */
    "RuleName": string;
    /**
     * 云产品的数据命名空间。关于如何查询云产品的数据命名空间，请参见[云产品监控项](~~163515~~)。
     * > 当您为企业云监控创建Prometheus报警规则时，该参数必须为`acs_prometheus`。
     * @example `acs_ecs_dashboard`
     */
    "Namespace": string;
    /**
     * 监控项名称。关于如何查询监控项名称，请参见[云产品监控项](~~163515~~)。
     * > 当您为企业云监控创建Prometheus报警规则时，该参数为指标仓库名称。关于如何获取指标仓库名称，请参见[DescribeHybridMonitorNamespaceList](~~428880~~)。
     * @example `cpu_total`
     */
    "MetricName": string;
    /**
     * 资源信息，例如：`[{"instanceId":"i-uf6j91r34rnwawoo****"}]`、`[{"userId":"100931896542****"}]`。
     * 关于资源信息支持的维度Dimensions，请参见[云产品监控项](~~163515~~)。
     * @example `[{"instanceId":"i-uf6j91r34rnwawoo****"}]`
     */
    "Resources"?: string;
    /**
     * 报警联系组。报警通知会发送给该报警联系组中的报警联系人。
     * > 报警联系组是一组报警联系人，可以包含一个或多个报警联系人。关于如何创建报警联系人和报警联系组，请参见[PutContact](~~114923~~)和[PutContactGroup](~~114929~~)。
     * @example `ECS_Group`
     */
    "ContactGroups": string;
    /**
     * 报警发生回调时指定的URL地址，向URL发送POST请求。
     * @example `https://alert.aliyun.com.com:8080/callback`
     */
    "Webhook"?: string;
    /**
     * 报警规则的生效时间范围。
     * @example `00:00-23:59`
     */
    "EffectiveInterval"?: string;
    /**
     * 报警规则的失效时间范围。
     * @example `00:00-06:00`
     */
    "NoEffectiveInterval"?: string;
    /**
     * 通道沉默周期。单位：秒，默认值：86400。
     * > 通道沉默周期是指报警发生后未恢复正常，间隔多久重新发送一次报警通知。
     * @example `86400`
     */
    "SilenceTime"?: number;
    /**
     * 监控项的统计周期。单位：秒。默认为监控项的原始上报周期。
     * >关于如何查询监控项的统计周期，请参见[云产品监控项](~~163515~~)。
     * @example `60`
     */
    "Period"?: string;
    /**
     * 报警规则的触发周期。单位：秒。
     * >关于如何查询监控项的统计周期，请参见[云产品监控项](~~163515~~)。
     * @example `60`
     */
    "Interval"?: string;
    /**
     * 报警邮件主题。
     * @example `ECS实例报警`
     */
    "EmailSubject"?: string;
    /**
     * Critical级别报警统计方法。
     * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `GreaterThanOrEqualToThreshold`
     */
    "Escalations.Critical.ComparisonOperator"?: string;
    /**
     * Critical级别报警阈值。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `90`
     */
    "Escalations.Critical.Threshold"?: string;
    /**
     * Critical级别报警重试次数。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `3`
     */
    "Escalations.Critical.Times"?: number;
    /**
     * Warn级别报警统计方法。
     * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `GreaterThanOrEqualToThreshold`
     */
    "Escalations.Warn.ComparisonOperator"?: string;
    /**
     * Warn级别报警阈值。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `90`
     */
    "Escalations.Warn.Threshold"?: string;
    /**
     * Warn级别报警重试次数。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `3`
     */
    "Escalations.Warn.Times"?: number;
    /**
     * Info级别报警统计方法。
     * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](~~163515~~)。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `GreaterThanOrEqualToThreshold`
     */
    "Escalations.Info.ComparisonOperator"?: string;
    /**
     * Info级别报警阈值。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `90`
     */
    "Escalations.Info.Threshold"?: string;
    /**
     * Info级别报警重试次数。
     * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
     * @example `3`
     */
    "Escalations.Info.Times"?: number;
    /**
     * 无监控数据时报警的处理方式。取值：
     * - KEEP\_LAST\_STATE（默认值）：不做任何处理。
     * - INSUFFICIENT\_DATA：报警内容为无数据。
     * - OK：正常。
     * @example `KEEP_LAST_STATE`
     */
    "NoDataPolicy"?: string;
    /**
     * 多指标的报警条件。
     * > 单指标和多指标互斥，不能同时设置。
     */
    "CompositeExpression"?: {
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
    };
    /**
     * 当监控项达到报警条件并进行报警时，标签同时写入监控项，在报警通知中进行展示。
     * > 该功能与Prometheus报警中的Label相同。
     */
    "Labels"?: {
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
    /**
     * Prometheus报警。
     * > 仅当您为企业云监控创建Prometheus报警规则，需要设置该参数。
     */
    "Prometheus"?: {
        /**
         * PromQL查询语句。
         * > 通过PromQL查询语句获取的数据即为报警数据，请您在该语句中携带报警阈值。
         * @example `cpuUsage{instanceId="xxxx"}[1m]>90`
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
}
