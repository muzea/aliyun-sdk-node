interface DescribeScalingRulesRequest {
    /**
    * 伸缩规则所属伸缩组的地域ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩规则列表的页码，起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：50。
    * 默认值：10。
    * @example `50`
    */ "PageSize"?: number;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId"?: string;
    /**
    * 伸缩规则的类型，取值范围：
    * - SimpleScalingRule：简单伸缩规则。根据调整方式（AdjustmentType）和调整值（AdjustmentValue）调整ECS实例数量。
    * - TargetTrackingScalingRule：目标追踪伸缩规则。根据预定义监控（MetricName）项动态计算需要扩缩容的ECS实例数量，尽量将预定义监控项的指标值维持在目标值（TargetValue）附近。
    * - StepScalingRule： 步进伸缩规则，根据阈值和指标值提供分步扩展方式。
    * - PredictiveScalingRule：预测伸缩规则，基于机器学习能力分析伸缩组的历史监控数据预测未来监控指标值，并支持自动创建定时任务设置伸缩组边界。
    * 默认值：SimpleScalingRule。
    * @example `SimpleScalingRule`
    */ "ScalingRuleType"?: string;
    /**
    * 是否返回伸缩规则关联的云监控报警任务，取值范围：
    * - true：返回伸缩规则关联的云监控报警任务。
    * - false：不返回伸缩规则关联的云监控报警任务。
    * 默认值：false。
    * @example `false`
    */ "ShowAlarmRules"?: boolean;
    /**
    * ScalingRuleId.N为待查询伸缩规则的ID，N的取值范围：1～10。
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.1"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.2"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.3"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.4"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.5"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.6"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.7"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.8"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.9"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId.10"?: string;
    /**
    * ScalingRuleName.N为待查询伸缩规则的名称，N的取值范围：1～10。
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.1"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.2"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.3"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.4"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.5"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.6"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.7"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.8"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.9"?: string;
    /**
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleName.10"?: string;
    /**
    * ScalingRuleAri.N为待查询伸缩规则的唯一标识符，N的取值范围：1～10。
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.1"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.2"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.3"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.4"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.5"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.6"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.7"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.8"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.9"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
    */ "ScalingRuleAri.10"?: string;
}
export { DescribeScalingRulesRequest };