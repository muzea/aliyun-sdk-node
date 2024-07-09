export interface DescribeScalingRulesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 伸缩规则总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 伸缩规则信息组成的集合。
     */
    ScalingRules: {
        /**
         * 伸缩规则关联的报警任务监控项名称。
         * @example `CpuUtilization`
         */
        MetricName: string;
        /**
         * 伸缩规则的调整方式。可能值：
         * - QuantityChangeInCapacity：增加或减少指定数量的ECS实例。
         * - PercentChangeInCapacity：增加或减少指定比例的ECS实例。
         * - TotalCapacity： 将当前伸缩组的ECS实例数量调整到指定数量。
         * @example `QuantityChangeInCapacity`
         */
        AdjustmentType: string;
        /**
         * 伸缩组实例数的上限，和PredictiveValueBehavior结合使用。
         * @example `100`
         */
        InitialMaxSize: number;
        /**
         * 新创建的实例做一系列准备措施，即预热所需要的时间，在预热时间内，已启动的实例将不影响伸缩组的监控指标。
         * @example `300`
         */
        EstimatedInstanceWarmup: number;
        /**
         * 创建目标追踪规则后，会自动创建报警任务。本参数用于指定对应的扩容报警任务触发报警时，所需连续满足阈值条件的次数。
         * @example `3`
         */
        ScaleOutEvaluationCount: number;
        /**
         * 预测规则的模式。可能值：
         * -  PredictAndScale：产生预测结果并创建预测任务。
         * -  PredictOnly：产生预测结果，但不会创建预测任务。
         * @example `PredictAndScale`
         */
        PredictiveScalingMode: string;
        /**
         * 伸缩规则最小调整实例数，仅当伸缩规则类型为SimpleScalingRule或StepScalingRule，且AdjustmentType为PercentChangeInCapacity时生效。
         * @example `1`
         */
        MinAdjustmentMagnitude: number;
        /**
         * 伸缩规则的唯一标识符。
         * @example `ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****`
         */
        ScalingRuleAri: string;
        /**
         * 预测规则自动创建的预测任务默认均在整点执行，您可以设置预启动时间提前执行预测任务，预先准备资源。取值范围：0~60，单位：分钟。
         * @example `30`
         */
        PredictiveTaskBufferTime: number;
        /**
         * 伸缩组最小实例数。
         * @example `1`
         */
        MinSize: number;
        /**
         * 伸缩组的ID。
         * @example `asg-bp1ffogfdauy0jw0****`
         */
        ScalingGroupId: string;
        /**
         * 预测规则最大值处理方式。可能值：
         * - MaxOverridePredictiveValue：初始最大值会覆盖预测值。预测值大于初始最大值时，预测任务的最大值采用初始最大值。
         * - PredictiveValueOverrideMax：预测值会覆盖初始最大值。预测值大于初始最大值时， 预测任务的最大值采用预测值。
         * - PredictiveValueOverrideMaxWithBuffer：预测值会附加一定比例。预测值会按照PredictiveValueBuffer比例增加，当增加后的值大于初始最大值时，会采用增加后的值。
         * @example `MaxOverridePredictiveValue`
         */
        PredictiveValueBehavior: string;
        /**
         * 目标值。当伸缩规则为目标追踪规则或预测规则时，该伸缩规则将通过添加或删除实例来将指标维持在目标值附近。
         * @example `0.125`
         */
        TargetValue: number;
        /**
         * 伸缩规则的冷却时间，仅适用于简单规则。 取值范围：0~86400，单位：秒。
         * @example `20`
         */
        Cooldown: number;
        /**
         * 伸缩组最大实例数。
         * @example `2`
         */
        MaxSize: number;
        /**
         * PredictiveValueBehavior为PredictiveValueOverrideMaxWithBuffer时生效，预测值会按照该比例增加，当增加后的值大于初始最大值时，会采用增加后的值。取值范围：0~100。
         * @example `50`
         */
        PredictiveValueBuffer: number;
        /**
         * 伸缩规则类型。可能值：
         * - SimpleScalingRule：简单规则。根据调整方式（AdjustmentType）和调整值（AdjustmentValue）调整ECS实例数量。
         * - TargetTrackingScalingRule：目标追踪规则。根据预定义监控（MetricName）项动态计算需要扩缩容的ECS实例数量，尽量将预定义监控项的指标值维持在目标值（TargetValue）附近。
         * - StepScalingRule： 步进规则，根据阈值和指标值提供分步扩展方式。
         * - PredictiveScalingRule：预测规则，基于机器学习能力分析伸缩组的历史监控数据预测未来监控指标值，并支持自动创建定时任务设置伸缩组边界。
         * @example `SimpleScalingRule`
         */
        ScalingRuleType: string;
        /**
         * 伸缩规则的调整值。
         * @example `1`
         */
        AdjustmentValue: number;
        /**
         * 创建目标追踪规则后，会自动创建报警任务。本参数用于指定对应的缩容报警任务触发报警时，所需连续满足阈值条件的次数。
         * @example `15`
         */
        ScaleInEvaluationCount: number;
        /**
         * 是否禁用缩容，仅适用于目标追踪规则。可能值：
         * - true：禁用缩容。
         * - false：允许缩容。
         * @example `true`
         */
        DisableScaleIn: boolean;
        /**
         * 伸缩规则的名称。
         * @example `scalingrule****`
         */
        ScalingRuleName: string;
        /**
         * 伸缩规则的ID。
         * @example `asr-bp1dvirgwkoowxk7****`
         */
        ScalingRuleId: string;
        /**
         * 伸缩规则关联的云监控报警任务。仅在ShowAlarmRules参数为true时返回伸缩规则关联的云监控报警任务，否则返回空列表。
         */
        Alarms: {
            /**
             * 伸缩规则关联的报警任务的ID。
             * @example `asg-bp18p2yfxow2dloq****_1f9458d1-70e1-4bee-8c7f-7a47695b****`
             */
            AlarmTaskId: string;
            /**
             * 伸缩规则关联的报警任务使用的监控项统计值与阈值的比较符，用于指定监控项统计值与阈值在什么关系下满足条件。可能值：
             * - 监控项统计值大于等于阈值。取值：>=。
             * - 监控项统计值小于等于阈值。取值：<=。
             * - 监控项统计值大于阈值。取值：>。
             * - 监控项统计值小于阈值。取值：<。
             * @example `>=`
             */
            ComparisonOperator: string;
            /**
             * 伸缩规则关联的报警任务监控项名称。
             * @example `CpuUtilization`
             */
            MetricName: string;
            /**
             * 伸缩规则关联的报警任务到达报警状态需要连续满足阈值表达式的次数。
             * @example `3`
             */
            EvaluationCount: number;
            /**
             * 伸缩规则关联的报警任务的名称。
             * @example `alarmtask****`
             */
            AlarmTaskName: string;
            /**
             * 伸缩规则关联的报警任务的类型。可能值：
             * - system：系统监控报警任务。
             * - custom：自定义监控报警任务。
             * @example `system`
             */
            MetricType: string;
            /**
             * 伸缩规则关联的报警任务的报警阈值。
             * @example `50`
             */
            Threshold: number;
            /**
             * 伸缩规则关联的报警任务的统计方式。可能值：
             * - Average：统计平均值。
             * - Maximum：统计最大值。
             * - Minimum：统计最小值。
             * @example `Average`
             */
            Statistics: string;
            /**
             * 伸缩规则关联的报警任务的维度信息。
             */
            Dimensions: {
                /**
                 * 监控项关联的维度信息键值。可能值：
                 * - scaling_group：伸缩组ID。
                 * - userId：用户账号ID。
                 * @example `scaling_group`
                 */
                DimensionKey: string;
                /**
                 * 监控项关联的维度信息属性值。
                 * @example `asg-bp18p2yfxow2dloq****`
                 */
                DimensionValue: string;
            }[];
        }[];
        /**
         * 步进规则的分步步骤。
         */
        StepAdjustments: {
            /**
             * 分步步骤的上边界，取值范围：-9.999999E18~9.999999E18。
             * @example `5.0`
             */
            MetricIntervalUpperBound: number;
            /**
             * 分步步骤对应的实例扩展数量。
             * @example `1`
             */
            ScalingAdjustment: number;
            /**
             * 分步步骤的下边界，取值范围：-9.999999E18~9.999999E18。
             * @example `1.0`
             */
            MetricIntervalLowerBound: number;
        }[];
        /**
         * 监控项维度信息值，适用于目标追踪规则，当监控项需额外维度信息时设置，例如LoadBalancerRealServerAverageQps监控项需指定rulePool维度信息。
         */
        AlarmDimensions: {
            /**
             * 监控项关联的维度信息键。
             * @example `rulePool`
             */
            DimensionKey: string;
            /**
             * 监控项关联的维度信息值。
             * @example `sgp-l1cbirz451yxu2****`
             */
            DimensionValue: string;
        }[];
    }[];
}
