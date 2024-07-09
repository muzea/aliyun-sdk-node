export interface CreateScalingRuleRequest {
    /**
     * 伸缩规则所属伸缩组的ID。
     * @example `asg-bp1ffogfdauy0jw0****`
     */
    "ScalingGroupId": string;
    /**
     * 伸缩规则的名称，2~64个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。
     * 同一用户账号同一地域同一伸缩组内伸缩规则唯一。
     * 如果没有指定该参数，默认值为ScalingRuleId的值。
     * @example `scalingrule****`
     */
    "ScalingRuleName"?: string;
    /**
     * 伸缩规则的冷却时间，仅适用于简单规则。取值范围：0~86400，单位：秒。
     * 默认值：空。
     * @example `60`
     */
    "Cooldown"?: number;
    /**
     * 伸缩规则最小调整实例数，仅当伸缩规则类型为SimpleScalingRule或StepScalingRule，且AdjustmentType为PercentChangeInCapacity时生效。
     * @example `1`
     */
    "MinAdjustmentMagnitude"?: number;
    /**
     * 伸缩规则的调整方式，适用于简单规则和步进规则，且此时该项必选。取值范围：
     * - QuantityChangeInCapacity：增加或减少指定数量的ECS实例。
     * - PercentChangeInCapacity：增加或减少指定比例的ECS实例。
     * - TotalCapacity：将当前伸缩组的ECS实例数量调整到指定数量。
     * @example `QuantityChangeInCapacity`
     */
    "AdjustmentType"?: string;
    /**
     * 伸缩规则的调整值，适用于简单规则和步进规则，且此时该项必选。任何情况下，单次调整的ECS实例台数都不能超过1000。不同调整方式对应的取值范围：
     * - QuantityChangeInCapacity：-1000~1000。
     * - PercentChangeInCapacity：-100~10000。
     * - TotalCapacity：0~2000。
     * @example `100`
     */
    "AdjustmentValue"?: number;
    /**
     * 伸缩规则类型，取值范围：
     * - SimpleScalingRule：简单规则。根据调整方式（AdjustmentType）和调整值（AdjustmentValue）调整ECS或ECI实例数量。
     * - TargetTrackingScalingRule：目标追踪规则。根据预定义监控（MetricName）项动态计算需要扩缩容的ECS或ECI实例数量，尽量将预定义监控项的指标值维持在目标值（TargetValue）附近。
     * - StepScalingRule：步进规则，根据阈值和指标值提供分步扩展方式。
     * - PredictiveScalingRule：预测规则，基于机器学习能力分析伸缩组的历史监控数据预测未来监控指标值，并支持自动创建定时任务设置伸缩组边界。
     * 默认值：SimpleScalingRule。
     * @example `SimpleScalingRule`
     */
    "ScalingRuleType"?: string;
    /**
     * 实例预热时间，适用于目标追踪规则和步进规则。处于预热状态的ECS实例将正常的加入伸缩组，但是期间将不会向云监控上报监控数据。
     * > 动态计算需要扩缩容的ECS实例数量时，处于预热状态的实例不计入现有实例数量。
     * 取值范围：0~86400，单位：秒。
     * 默认值：300。
     * @example `300`
     */
    "EstimatedInstanceWarmup"?: number;
    /**
     * 预定义监控项，适用于目标追踪规则和预测规则，且此时该项必选。
     * 目标追踪规则取值范围：
     * - CpuUtilization：（ECS）平均CPU使用率。
     * - IntranetTx：（ECS）内网出流量的平均值。
     * - IntranetRx：（ECS）内网入流量的平均值。
     * - VpcInternetTx：（ECS）公网出流量的平均值。
     * - VpcInternetRx：（ECS）公网入流量的平均值。
     * - MemoryUtilization：（Agent）内存。
     * - LoadBalancerRealServerAverageQps：（ALB）服务器组单机QPS。
     * 预测规则取值范围：
     * - CpuUtilization：（ECS）平均CPU使用率。
     * - IntranetRx：（ECS）内网入流量平均值。
     * - IntranetTx ：（ECS）内网出流量平均值。
     * @example `CpuUtilization`
     */
    "MetricName"?: string;
    /**
     * 目标值，适用于目标追踪规则和预测规则，且此时该项必选。TargetValue最多保留小数点后三位，且必须大于0。
     * @example `0.125`
     */
    "TargetValue"?: number;
    /**
     * 是否禁用缩容，仅适用于目标追踪规则。
     * 默认值：false。
     * @example `false`
     */
    "DisableScaleIn"?: boolean;
    /**
     * 创建目标追踪规则后，会自动创建报警任务。本参数用于指定对应的缩容报警任务触发报警时，所需连续满足阈值条件的次数。
     * 默认值：15。
     * @example `15`
     */
    "ScaleInEvaluationCount"?: number;
    /**
     * 创建目标追踪规则后，会自动创建报警任务。本参数用于指定对应的扩容报警任务触发报警时，所需连续满足阈值条件的次数。
     * 默认值：3。
     * @example `3`
     */
    "ScaleOutEvaluationCount"?: number;
    /**
     * 预测规则的模式，取值范围：
     * - PredictAndScale：产生预测结果并创建预测任务。
     * - PredictOnly：产生预测结果，但不会创建预测任务。
     * 默认值：PredictAndScale。
     * @example `PredictAndScale`
     */
    "PredictiveScalingMode"?: string;
    /**
     * 预测规则最大值处理方式，取值范围：
     * - MaxOverridePredictiveValue：初始最大值会覆盖预测值。预测值大于初始最大值时，预测任务的最大值采用初始最大值。
     * - PredictiveValueOverrideMax：预测值会覆盖初始最大值。预测值大于初始最大值时，预测任务的最大值采用预测值。
     * - PredictiveValueOverrideMaxWithBuffer：预测值会附加一定比例。预测值会按照PredictiveValueBuffer比例增加，当增加后的值大于初始最大值时，会采用增加后的值。
     * 默认值：MaxOverridePredictiveValue。
     * @example `MaxOverridePredictiveValue`
     */
    "PredictiveValueBehavior"?: string;
    /**
     * `PredictiveValueBehavior`为`PredictiveValueOverrideMaxWithBuffer`时生效，预测值会按照该比例增加，当增加后的值大于初始最大值时，会采用增加后的值。取值范围：0~100。
     * 默认值：0。
     * @example `50`
     */
    "PredictiveValueBuffer"?: number;
    /**
     * 预测规则自动创建的预测任务默认均在整点执行，您可以设置预启动时间提前执行预测任务，预先准备资源。取值范围：0~60，单位：分钟。
     * 默认值：0。
     * @example `30`
     */
    "PredictiveTaskBufferTime"?: number;
    /**
     * 伸缩组实例数上限，和`PredictiveValueBehavior`结合使用。
     * 默认值为伸缩组最大实例数（MaxSize的值）。
     * @example `100`
     */
    "InitialMaxSize"?: number;
    /**
     * 分步步骤对应的实例扩展信息组成的集合。
     */
    "StepAdjustments"?: {
        /**
         * 分步步骤的上边界，取值范围：-9.999999E18~9.999999E18。
         * @example `5.0`
         */
        MetricIntervalUpperBound: number;
        /**
         * 分步步骤对应的实例扩展数量，仅适用于步进规则。
         * @example `1`
         */
        ScalingAdjustment: number;
        /**
         * 分步步骤的下边界，仅适用于步进规则。取值范围：-9.999999E18~9.999999E18。
         * @example `1.0`
         */
        MetricIntervalLowerBound: number;
    }[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 监控项维度信息值，适用于目标追踪规则，当监控项需额外维度信息时设置，例如LoadBalancerRealServerAverageQps监控项需指定rulePool维度键值信息。
     */
    "AlarmDimensions"?: {
        /**
         * 监控项关联的维度信息键。
         * @example `rulePool`
         */
        DimensionKey: string;
        /**
         * 监控项关联的维度信息值。
         * @example `sgp-l1cbirz451yxuxxx`
         */
        DimensionValue: string;
    }[];
}
