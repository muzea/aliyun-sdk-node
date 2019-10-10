interface ModifyScalingGroupRequest {
    "RegionId"?: string;
    /**
    * 待修改伸缩组的ID。
    * @example `cqS5QbbhmvGLcJbWoDbW****`
    */ "ScalingGroupId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩组的名称，同一地域下伸缩组名称唯一。长度为2~40个英文或中文字符，以数字、大小英文字母或中文开头，可以包含数字、下划线（_）、连字符（-）和小数点（.）。
    * @example `Scaling****`
    */ "ScalingGroupName"?: string;
    /**
    * 伸缩组内ECS实例台数的最小值，取值范围：0~1000 。当伸缩组内ECS实例数小于MinSize时，弹性伸缩会自动创建ECS实例。
    * @example `1`
    */ "MinSize"?: number;
    /**
    * 伸缩组内ECS实例台数的最大值，取值范围：0~1000。 当伸缩组内ECS实例数大于MaxSize时，弹性伸缩会自动移出ECS实例。
    * @example `99`
    */ "MaxSize"?: number;
    "VSwitchIds"?: string[];
    /**
    * 一次伸缩活动（添加或移出ECS实例）结束后的一段冷却时间。取值范围：0~86400，单位：秒。
    * 冷却时间内，该伸缩组不执行其它的伸缩活动，仅针对[云监控](~~35170~~)报警任务触发的伸缩活动有效。
    * @example `600`
    */ "DefaultCooldown"?: number;
    /**
    * RemovalPolicy.N指定移出ECS实例的伸缩组策略，N的取值范围：1~2。更多详情，请参见[移出策略](~~25910~~)。取值范围：
    * - OldestInstance：移出最早加入伸缩组的ECS实例
    * - NewestInstance：移出最新加入伸缩组的ECS实例
    * - OldestScalingConfiguration：移出最早伸缩配置创建的ECS实例
    * @example `OldestScalingConfiguration`
    */ "RemovalPolicy.1"?: string;
    /**
    * @example `NewestInstance`
    */ "RemovalPolicy.2"?: string;
    /**
    * 伸缩组内生效的伸缩配置的ID。
    * @example `bU5uZHcAgtzwcL4IeDea****`
    */ "ActiveScalingConfigurationId"?: string;
    /**
    * 伸缩组的健康检查方式，取值范围：
    * - NONE：不做健康检查。
    * - ECS：对伸缩组内的ECS实例做健康检查。
    * @example `ECS`
    */ "HealthCheckType"?: string;
    /**
    * 实例启动模板ID，用于指定伸缩组从实例启动模板获取启动配置信息。
    * @example `lt-m5e3ofjr1zn1aw7****`
    */ "LaunchTemplateId"?: string;
    /**
    * 实例启动模板的版本，取值范围：
    *
    * - 固定的模板版本号
    * - Default：始终使用模板默认版本
    * - Latest：始终使用模板最新版本
    * @example `Default`
    */ "LaunchTemplateVersion"?: string;
    /**
    * 伸缩组所需要按量实例个数的最小值，取值范围：0~1000。当按量实例个数少于该值时，将优先创建按量实例。
    * @example `30`
    */ "OnDemandBaseCapacity"?: number;
    /**
    * 伸缩组满足最小按量实例数（OnDemandBaseCapacity）要求后，超出的实例中按量实例应占的比例，取值范围：0～100。
    * @example `20`
    */ "OnDemandPercentageAboveBaseCapacity"?: number;
    /**
    * 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。
    * @example `true`
    */ "SpotInstanceRemedy"?: boolean;
    /**
    * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：0~10。
    * @example `5`
    */ "SpotInstancePools"?: number;
}
export { ModifyScalingGroupRequest };