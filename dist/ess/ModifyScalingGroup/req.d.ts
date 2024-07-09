export interface ModifyScalingGroupRequest {
    /**
     * 待修改伸缩组的ID。
     * @example `asg-bp1ffogfdauy0jw0****`
     */
    "ScalingGroupId": string;
    /**
     * 伸缩组的名称，同一地域下伸缩组名称唯一。长度为2~64个字符，以数字、大小英文字母或中文开头，可以包含数字、下划线（_）、短划线（-）和半角句号（.）。
     * @example `scalinggroup****`
     */
    "ScalingGroupName"?: string;
    /**
     * 伸缩组内ECS实例或ECI实例台数的最小值，当伸缩组内ECS或ECI实例数小于MinSize时，弹性伸缩会自动创建ECS实例或ECI实例。
     * > MinSize的值必须小于或等于MaxSize的值。
     * @example `1`
     */
    "MinSize"?: number;
    /**
     * 伸缩组内ECS实例或ECI实例台数的最大值，当伸缩组内ECS或ECI实例数大于MaxSize时，弹性伸缩会自动移出ECS实例或ECI实例。
     * <props="china">MaxSize的取值范围和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以设置的组内最大实例数**对应的配额值。</props>
     * <props="intl">MaxSize的取值范围和弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看**单个伸缩组可以设置的组内最大实例数**对应的配额值。</props>
     * <props="partner">MaxSize的取值范围和弹性伸缩使用情况有关，请前往配额中心查看**单个伸缩组可以设置的组内最大实例数**对应的配额值。</props>
     * 例如，如果**单个伸缩组可以设置的组内最大实例数**对应的配额值为2000，则MaxSize的取值范围为0~2000。
     * @example `99`
     */
    "MaxSize"?: number;
    /**
     * 伸缩组默认的冷却时间，仅适用于简单规则。取值范围：0~86400，单位：秒。
     * 冷却时间内，该伸缩组不执行其他的伸缩活动，仅针对云监控报警任务触发的伸缩活动有效。
     * @example `600`
     */
    "DefaultCooldown"?: number;
    /**
     * 指定移出ECS实例的伸缩组策略。取值范围：
     * - OldestInstance：移出最早加入伸缩组的ECS实例。
     * - NewestInstance：移出最新加入伸缩组的ECS实例。
     * - OldestScalingConfiguration：移出最早伸缩配置创建的ECS实例。
     */
    "RemovalPolicies"?: string[];
    /**
     * 伸缩组内生效的伸缩配置的ID。
     * @example `asc-bp17pelvl720x5ub****`
     */
    "ActiveScalingConfigurationId"?: string;
    /**
     * 伸缩组的健康检查方式。取值范围：
     * - NONE：不做健康检查。
     * - ECS：对伸缩组内的ECS实例做健康检查。
     * - ECI：对伸缩组内的ECS实例做健康检查。
     * - LOAD_BALANCER: 根据负载均衡（暂不支持CLB负载均衡类型）健康检查结果判断实例健康状态。
     * >该参数与`HealthCheckTypes`参数作用相同，您可以根据实际情况进行二选一设置，即如果设置了`HealthCheckTypes`参数，则`HealthCheckType`参数将被忽略（非必填项）。
     * @example `ECS`
     */
    "HealthCheckType"?: string;
    /**
     * 实例启动模板ID，用于指定伸缩组从实例启动模板获取启动配置信息。
     * @example `	lt-m5e3ofjr1zn1aw7****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 实例启动模板的版本。取值范围：
     *
     * - 固定的模板版本号。
     * - Default：始终使用模板默认版本。
     * - Latest：始终使用模板最新版本。
     * @example `Default`
     */
    "LaunchTemplateVersion"?: string;
    /**
     * 伸缩组所需要按量实例个数的最小值，取值范围：0~1000。当按量实例个数少于该值时，将优先创建按量实例。
     * 当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时，默认值为0。
     * @example `30`
     */
    "OnDemandBaseCapacity"?: number;
    /**
     * 伸缩组满足最小按量实例数（OnDemandBaseCapacity）要求后，超出的实例中按量实例应占的比例，取值范围：0～100。
     * 当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时，默认值为100。
     * @example `20`
     */
    "OnDemandPercentageAboveBaseCapacity"?: number;
    /**
     * 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。
     * @example `true`
     */
    "SpotInstanceRemedy"?: boolean;
    /**
     * 当`CreateScalingGroup`接口的`MultiAZPolicy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值范围：
     * - true：允许。
     * - false：不允许。
     * @example `true`
     */
    "CompensateWithOnDemand"?: boolean;
    /**
     * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：0~10。
     * 当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时，默认值为2。
     * @example `5`
     */
    "SpotInstancePools"?: number;
    /**
     * 伸缩组内ECS实例或ECI实例的期望数量，伸缩组会自动将ECS实例或ECI实例数量维持在期望实例数。取值范围：MaxSize≥期望实例数量≥MinSize。
     * >  如果期望实例数功能关闭后又重新开启，则您需要重新设置 `DesiredCapacity` 值。
     * @example `5`
     */
    "DesiredCapacity"?: number;
    /**
     * 是否开启伸缩组删除保护。取值范围：
     * - true：开启伸缩组删除保护，此时不能删除该伸缩组。
     * - false：关闭伸缩组删除保护。
     * @example `true`
     */
    "GroupDeletionProtection"?: boolean;
    /**
     * 多可用区伸缩组ECS实例扩缩容策略。取值范围：
     * - PRIORITY：根据虚拟交换机（VSwitchIds.N）的优先级进行扩缩容。弹性伸缩优先在优先级最高的交换机所在可用区尝试扩缩容，如果无法扩缩容，则自动在下一优先级的交换机所在可用区进行扩缩容。
     * - COST_OPTIMIZED：扩容时弹性伸缩按vCPU单价从低到高尝试创建ECS实例，缩容时按vCPU单价从高到低尝试移出ECS实例。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数，指定弹性伸缩在无法创建抢占式实例时，是否自动尝试创建按量付费实例。
     * > `COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
     * - BALANCE：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API RebalanceInstance平衡资源。
     * - COMPOSABLE：是一种组合策略，您可以根据需要自主组合上述多可用区伸缩组ECS实例的扩缩容策略。
     * @example `PRIORITY`
     */
    "MultiAZPolicy"?: string;
    /**
     * 一台或多台虚拟交换机的ID。
     * 只有当伸缩组网络类型为VPC时，当前参数才生效。指定虚拟交换机所属的VPC必须和伸缩组所属的VPC相同。
     * 虚拟交换机可以来自多个可用区。虚拟交换机的优先级按照数字升序排序，1表示最高优先级。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动选择下一优先级的虚拟交换机创建ECS实例。
     */
    "VSwitchIds"?: string[];
    /**
     * 扩展启动模板的实例规格信息。
     */
    "LaunchTemplateOverrides"?: {
        /**
         * 当您需要伸缩组按照实例规格容量进行伸缩时，请同时指定本参数和LaunchTemplateOverrides.WeightedCapacity。
         * 本参数用于指定实例规格，会覆盖启动模板中的实例规格。
         * > 仅当LaunchTemplateId参数指定了启动模板时，本参数生效。
         * InstanceType的取值范围：在售的ECS实例规格。
         * @example `ecs.c5.xlarge
        `
         */
        InstanceType: string;
        /**
         * 当您需要伸缩组按照实例规格容量进行伸缩时，在指定LaunchTemplateOverrides.InstanceType后，再指定本参数。两个参数一一对应。
         * 本参数用于指定实例规格的权重，即实例规格的单台实例在伸缩组中表示的容量大小。
         * 权重越大，满足期望容量所需的本实例规格的实例数量越少。
         * 由于每个实例规格的vCPU个数、内存大小等性能指标会有差异，您可以根据自身需求，给不同的实例规格配置不同的权重。
         * 例如：
         * - 当前容量：0。
         * - 期望容量：6。
         * - ecs.c5.xlarge规格容量：4。
         * 为满足期望容量，伸缩组将为用户扩容2台ecs.c5.xlarge实例。
         * > 扩容时伸缩组的容量不得超过最大容量（MaxSize）与实例规格的最大权重之和。
         * WeightedCapacity的取值范围：1~500。
         * @example `4`
         */
        WeightedCapacity: number;
        /**
         * 本参数用于指定实例启动模板覆盖规格（即`LaunchTemplateOverride.N.InstanceType`）的竞价价格上限。您可以指定N个该参数，扩展启动模板支持N个实例规格。N的取值范围：1~10。
         * >仅当`LaunchTemplateId`参数指定了启动模板时，该参数才生效。
         * @example `0.025`
         */
        SpotPriceLimit: number;
    }[];
    /**
     * 实例在伸缩组中存活的最大时间。单位为秒。
     * 取值范围：0或`[86400, Integer.maxValue]`。其中，0表示清空MaxInstanceLifetime设置过的值（即未设置MaxInstanceLifetime值）。
     * 默认值：null。
     * > ECI类型的伸缩组或停机不收费的伸缩组不支持设置该参数。
     * @example `null`
     */
    "MaxInstanceLifetime"?: number;
    /**
     * 伸缩组的容量是否在多个可用区间均衡分布（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效），取值范围：
     * - true：伸缩组的容量在多个可用区间均衡分布。
     * - false：伸缩组的容量不在多个可用区间均衡分布。
     * 默认值：false。
     * @example `false`
     */
    "AzBalance"?: boolean;
    /**
     * 容量分配策略，决定了伸缩组如何选择可用的实例规格类型满足容量。容量分布策略同时对按量和抢占式容量生效（仅当MultiAZPolicy参数取值为COMPOSABLE策略时生效）。取值范围：
     * - priority：按照配置的实例规格的顺序创建实例。
     * - lowestPrice：按照实例规格单位vCpu价格从低到高创建实例。
     * 默认值：priority。
     * @example `priority`
     */
    "AllocationStrategy"?: string;
    /**
     * 抢占式容量分布策略。您可以通过该参数单独指定抢占式容量的分布策略（仅当`MultiAZPolicy`参数取值为`COMPOSABLE`策略时生效）。取值范围：
     * - priority：按照配置的实例规格的顺序创建实例。
     * - lowestPrice：按照实例规格单位vCpu价格从低到高创建实例。
     * 默认值：priority。
     * @example `lowestPrice`
     */
    "SpotAllocationStrategy"?: string;
    /**
     * 自定义缩容策略Function函数ARN。仅当RemovalPolicies配置第一个移除策略未CustomPolicy时生效。
     * @example `acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name`
     */
    "CustomPolicyARN"?: string;
    /**
     * 伸缩组是否关闭期望实例数功能。取值范围：
     * - false：启用期望实例数功能。
     * - true：关闭期望实例数功能。
     * > 只有伸缩组当前无伸缩活动时，才能将该参数设置为true（即关闭伸缩组的期望实例数功能），关闭伸缩组的期望实例数功能时伸缩组当前的DesiredCapacity属性也会被清空，但伸缩组中当前的实例数量不发生变化。
     * @example `false`
     */
    "DisableDesiredCapacity"?: boolean;
    /**
     * 指定伸缩组的回收模式。取值范围：
     * - recycle：伸缩组的回收模式为停机回收模式。
     * - release：伸缩组的回收模式为释放模式。
     * - forcerelease：伸缩组的回收模式为强制释放模式。
     *     >选择`forcerelease`后，在弹性收缩活动中系统会强制释放`运行中`（Running）的实例。强制释放实例相当于断电操作，会导致该实例内存以及存储中的临时数据被擦除，数据无法恢复，请您谨慎选择。
     * - forcerecycle：伸缩组的回收模式为强制停机回收模式。
     *     >选择`forcerecycle`后，在弹性收缩活动中系统会强制关机`运行中`（Running）的实例。强制关机相当于断电操作，会导致该实例内存以及存储中的临时数据被擦除，数据无法恢复，请您谨慎选择。
     * ScalingPolicy指定伸缩组的回收模式，但实例被移出伸缩组时的具体动作，由RemoveInstances的RemovePolicy参数决定，更多信息，请参见[RemoveInstances](~~25955~~)。
     * @example `recycle`
     */
    "ScalingPolicy"?: string;
    /**
     * 伸缩组的健康检查方式。取值范围：
     * - NONE：不做健康检查。
     * - ECS：对伸缩组内的ECS实例做健康检查。
     * - ECI：对伸缩组内的ECI实例做健康检查。
     * - LOAD_BALANCER: 根据负载均衡（暂不支持CLB负载均衡类型）健康检查结果判断实例健康状态。
     */
    "HealthCheckTypes"?: string[];
}
