interface ModifyScalingRuleRequest {
    "RegionId"?: string;
    /**
    * 待修改伸缩规则的ID。
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩规则的显示名称，2~40 个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。同一用户账号同一地域同一伸缩组内唯一。
    * @example `测试sr`
    */ "ScalingRuleName"?: string;
    /**
    * 伸缩规则的冷却时间，仅适用于简单伸缩规则。
    * 取值范围：0~86400，单位：秒。
    * @example `60`
    */ "Cooldown"?: number;
    /**
    * 伸缩规则最小调整实例数，仅当伸缩规则类型为SimpleScalingRule或StepScalingRule，且AdjustmentType为PercentChangeInCapacity时生效。
    * @example `1`
    */ "MinAdjustmentMagnitude"?: number;
    /**
    * 伸缩规则的调整方式， 仅适用于简单伸缩规则。可选值：
    * - QuantityChangeInCapacity：增加或减少指定数量的 ECS 实例。
    * - PercentChangeInCapacity：增加或减少指定比例的 ECS 实例。
    * - TotalCapacity： 将当前伸缩组的 ECS 实例数量调整到指定数量。
    *
    * @example `QuantityChangeInCapacity`
    */ "AdjustmentType"?: string;
    /**
    * 伸缩规则的调整值， 仅适用于简单伸缩规则。任何情况下，单次调整的ECS实例台数都不能超过500。不同调整方式对应的取值范围：
    * - QuantityChangeInCapacity：-500~500
    * - PercentChangeInCapacity：-100~10000
    * - TotalCapacity：0~1000
    *
    * @example `100`
    */ "AdjustmentValue"?: number;
    /**
    * 实例预热时间，适用于目标追踪伸缩规则和步进伸缩规则。处于预热状态的ECS实例将正常的加入伸缩组，但是期间将不会向云监控上报监控数据。
    * > 动态计算需要扩缩容的ECS实例数量时，处于预热状态的实例不计入现有实例数量。
    * 取值范围：0~86400，单位：秒。
    * @example `60`
    */ "EstimatedInstanceWarmup"?: number;
    /**
    * 预定义监控项，适用于目标追踪伸缩规则和预测规则，且此时该项必选。
    * 目标追踪伸缩规则取值范围：
    * - CpuUtilization：平均CPU使用率
    * - ClassicInternetRx：经典网络公网入流量平均值
    * - ClassicInternetTx：经典网络公网出流量平均值
    * - VpcInternetRx：VPC网络公网入流量平均值
    * - VpcInternetTx：VPC网络公网出流量平均值
    * - IntranetRx：内网入流量平均值
    * - IntranetTx ：内网出流量平均值
    * 预测规则取值范围：
    * - CpuUtilization：平均CPU使用率
    * - IntranetRx：内网入流量平均值
    * - IntranetTx ：内网出流量平均值
    * @example `CpuUtilization`
    */ "MetricName"?: string;
    /**
    * 目标值，适用于目标追踪伸缩规则和预测规则。TargetValue最多保留小数点后三位，且必须大于0。
    * @example `0.125`
    */ "TargetValue"?: number;
    /**
    * 是否禁用缩容，仅适用于目标追踪伸缩规则。
    * @example `true`
    */ "DisableScaleIn"?: boolean;
    "StepAdjustment"?: string[];
    /**
    * 预测规则的模式，取值范围：
    * -  PredictAndScale：产生预测结果并创建预测任务。
    * -  PredictOnly：产生预测结果，但不会创建预测任务。
    * @example `PredictAndScale`
    */ "PredictiveScalingMode"?: string;
    /**
    * 预测规则最大值处理方式，取值范围：
    * - MaxOverridePredictiveValue：初始最大值会覆盖预测值。预测值大于初始最大值时，预测任务的最大值采用初始最大值。
    * - PredictiveValueOverrideMax：预测值会覆盖初始最大值。预测值大于初始最大值时， 预测任务的最大值采用预测值。
    * - PredictiveValueOverrideMaxWithBuffer：预测值会附加一定比例。预测值会按照PredictiveValueBuffer比例增加，当增加后的值大于初始最大值时，会采用增加后的值。
    * @example `MaxOverridePredictiveValue`
    */ "PredictiveValueBehavior"?: string;
    /**
    * PredictiveValueBehavior为PredictiveValueOverrideMaxWithBuffer时生效，预测值会按照该比例增加，当增加后的值大于初始最大值时，会采用增加后的值。取值范围：0~100。
    * @example `50`
    */ "PredictiveValueBuffer"?: number;
    /**
    * 预测规则自动创建的预测任务默认均在整点执行，您可以设置预启动时间提前执行预测任务，预先准备资源。取值范围：0~60。
    * @example `30`
    */ "PredictiveTaskBufferTime"?: number;
    /**
    * 伸缩组实例数上限，和PredictiveValueBehavior结合使用。
    * @example `100`
    */ "InitialMaxSize"?: number;
}
export { ModifyScalingRuleRequest };