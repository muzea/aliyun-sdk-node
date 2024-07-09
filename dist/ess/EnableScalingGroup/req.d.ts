export interface EnableScalingGroupRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp14wlu85wrpchm0****`
     */
    "ScalingGroupId": string;
    /**
     * 需要在伸缩组内启用的伸缩配置的ID。
     * @example `asc-bp1ffogfdauy0nu5****`
     */
    "ActiveScalingConfigurationId"?: string;
    /**
     * 实例启动模板的ID，用于指定伸缩组从实例启动模板获取启动配置信息。
     * @example `lt-m5e3ofjr1zn1aw7****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 实例启动模板的版本。取值范围：
     * - 固定的模板版本号。
     * - Default：始终使用模板默认版本。
     * - Latest：始终使用模板最新版本。
     *
     * @example `Default`
     */
    "LaunchTemplateVersion"?: string;
    /**
     * 启用伸缩组后需要加入伸缩组的ECS实例的ID。
     * 指定加入伸缩组的ECS实例需要满足以下条件：
     * - 必须与伸缩组在同一个地域。
     * - 必须处于Running状态。
     * - 不能已加入到其他伸缩组中。
     * - 付费方式为包年包月、按量付费或抢占式实例。
     * - 如果伸缩组指定VswitchID，则不支持Classic类型的ECS实例加入伸缩组，也不支持其他VPC的ECS实例加入伸缩组。
     * - 如果伸缩组没有指定VswitchID，则不支持VPC类型的ECS实例加入伸缩组。
     */
    "InstanceIds"?: string[];
    /**
     * 加入伸缩组中ECS实例或ECI实例作为后端服务器的权重。
     * 默认值：50。
     */
    "LoadBalancerWeights"?: number[];
    /**
     * 扩展启动模板的实例规格信息。
     */
    "LaunchTemplateOverrides"?: {
        /**
         * 当您需要伸缩组按照实例规格容量进行伸缩时，请同时指定本参数和`LaunchTemplateOverrides.WeightedCapacity`。
         * 本参数用于指定实例规格，会覆盖启动模板中的实例规格。
         * > 仅当LaunchTemplateId参数指定了启动模板时，本参数生效。
         * InstanceType的取值范围：在售的ECS实例规格。
         * @example `ecs.c5.xlarge`
         */
        InstanceType: string;
        /**
         * 当您需要伸缩组按照实例规格容量进行伸缩时，指定`LaunchTemplateOverrides.InstanceType`后，再指定本参数。
         * 本参数用于指定实例规格的权重，即实例规格的单台实例在伸缩组中表示的容量大小。权重越大，满足期望容量所需的本实例规格的实例数量越少。
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
    }[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
