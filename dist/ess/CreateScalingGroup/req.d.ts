interface CreateScalingGroupRequest {
    /**
    * 伸缩组所属的地域ID。更多详情，请参见[地域与可用区](~~40654~~)。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * 伸缩组内ECS实例台数的最小值，取值范围：0~1000 。当伸缩组内ECS实例数小于MinSize时，弹性伸缩会自动创建ECS实例。
    * @example `2`
    */ "MinSize": number;
    /**
    * 伸缩组内ECS实例台数的最大值，取值范围：0~1000。 当伸缩组内ECS实例数大于MaxSize时，弹性伸缩会自动移出ECS实例。
    * @example `20`
    */ "MaxSize": number;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩组的名称，同一地域下伸缩组名称唯一。长度为2~40个英文或中文字符，以数字、大小英文字母或中文开头，可以包含数字、下划线（_）、连字符（-）和小数点（.）。
    * 默认值为伸缩组ID。
    * @example `测试sg`
    */ "ScalingGroupName"?: string;
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
    "InstanceId"?: string;
    /**
    *  一次伸缩活动（添加或移出ECS实例）结束后的一段冷却时间。取值范围：0~86400，单位：秒。
    * 默认值：300。
    * 冷却时间内，该伸缩组不执行其它的伸缩活动，仅针对[云监控](~~35170~~)报警任务触发的伸缩活动有效。
    * @example `300`
    */ "DefaultCooldown"?: number;
    /**
    * 负载均衡实例ID。取值可以是由多台负载均衡实例ID组成一个JSON数组，最多支持5个ID，ID之间用半角逗号（,）隔开。
    * @example `["lb-idx", "lb-idy", "lb-idz"]`
    */ "LoadBalancerIds"?: string;
    /**
    * RDS实例ID。取值可以是由多台RDS实例ID组成一个JSON数组，最多支持8个ID，ID之间用半角逗号（,）隔开。
    * @example `["rm-idx", "rm-idy", "rm-idz"]`
    */ "DBInstanceIds"?: string;
    /**
    * RemovalPolicy.N指定移出ECS实例的伸缩组策略，N的取值范围：1~2。更多详情，请参见[移出策略](~~25910~~)。取值范围：
    * - OldestInstance：移出最早加入伸缩组的ECS实例
    * - NewestInstance：移出最新加入伸缩组的ECS实例
    * - OldestScalingConfiguration：移出最早伸缩配置创建的ECS实例
    * RemovalPolicy.1的默认值：OldestScalingConfiguration。
    * RemovalPolicy.2的默认值：OldestInstance。
    * @example `OldestScalingConfiguration`
    */ "RemovalPolicy.1"?: string;
    /**
    * @example `OldestInstance`
    */ "RemovalPolicy.2"?: string;
    /**
    * 创建VPC类型的伸缩组时，指定的虚拟交换机ID。
    * @example `vsw-****`
    */ "VSwitchId"?: string;
    "VSwitchIds"?: string[];
    /**
    *  多可用区伸缩组ECS实例扩缩容策略。取值范围：
    *
    * - PRIORITY：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。
    * - COST_OPTIMIZED：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式计费实例。当抢占式计费实例由于库存等原因无法创建时，自动尝试以按量付费的方式创建。
    *     > COST_OPTIMIZED仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
    * - BALANCE：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API [RebalanceInstance](~~71516~~)平衡资源。
    * 默认值：PRIORITY 。
    * @example `PRIORITY`
    */ "MultiAZPolicy"?: string;
    /**
    * 伸缩组的健康检查方式，取值范围：
    * - NONE：不做健康检查。
    * - ECS：对伸缩组内的ECS实例做健康检查。
    * @example `ECS`
    */ "HealthCheckType"?: string;
    "LifecycleHook"?: string[];
    "VServerGroup"?: string[];
    /**
    * 指定伸缩组的回收模式，取值范围：
    *
    * - recycle：伸缩组的回收模式为停机回收模式
    * - release：伸缩组的回收模式为释放模式
    * 关于被移出实例的动作，请参见[RemoveInstances](~~25955~~)。
    * @example `recycle`
    */ "ScalingPolicy"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-42665544****`
    */ "ClientToken"?: string;
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
export { CreateScalingGroupRequest };