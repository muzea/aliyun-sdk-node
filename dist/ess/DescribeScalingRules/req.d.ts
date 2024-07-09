export interface DescribeScalingRulesRequest {
    /**
     * 伸缩规则所属伸缩组的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 伸缩规则列表的页码，起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值：50。
     * 默认值：10。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 伸缩组的ID。
     * @example `asg-bp1ffogfdauy0jw0****`
     */
    "ScalingGroupId"?: string;
    /**
     * 伸缩规则的类型。取值范围：
     * - SimpleScalingRule：简单规则。根据调整方式（AdjustmentType）和调整值（AdjustmentValue）调整ECS实例数量。
     * - TargetTrackingScalingRule：目标追踪规则。根据预定义监控（MetricName）项动态计算需要扩缩容的ECS实例数量，尽量将预定义监控项的指标值维持在目标值（TargetValue）附近。
     * - StepScalingRule：步进规则，根据阈值和指标值提供分步扩展方式。
     * - PredictiveScalingRule：预测规则，基于机器学习能力分析伸缩组的历史监控数据预测未来监控指标值，并支持自动创建定时任务设置伸缩组边界。
     * @example `SimpleScalingRule`
     */
    "ScalingRuleType"?: string;
    /**
     * 是否返回伸缩规则关联的云监控报警任务。取值范围：
     * - true：返回伸缩规则关联的云监控报警任务。
     * - false：不返回伸缩规则关联的云监控报警任务。
     * 默认值：false。
     * @example `false`
     */
    "ShowAlarmRules"?: boolean;
    /**
     * 待查询伸缩规则的ID。
     */
    "ScalingRuleIds"?: string[];
    /**
     * 待查询伸缩规则的名称。
     */
    "ScalingRuleNames"?: string[];
    /**
     * 待查询伸缩规则的唯一标识符。
     */
    "ScalingRuleAris"?: string[];
}
