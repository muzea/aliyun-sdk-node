export interface ModifyAutoProvisioningGroupRequest {
    /**
     * 弹性供应组所在地域的ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性供应组的ID。
     * @example `apg-bp67acfmxazb4ph****`
     */
    "AutoProvisioningGroupId"?: string;
    /**
     * 弹性供应组实时容量超过目标容量并触发缩容时，是否释放缩容的实例。取值范围：
     * - termination：释放缩容的实例。
     * - no-termination：只将缩容的实例移出弹性供应组。
     * @example `no-termination`
     */
    "ExcessCapacityTerminationPolicy"?: string;
    /**
     * PayAsYouGoTargetCapacity和SpotTargetCapacity之和小于TotalTargetCapacity时，指定差额容量的计费方式。取值范围：
     * - PayAsYouGo：按量付费实例。
     * - Spot：抢占式实例。
     * @example `Spot`
     */
    "DefaultTargetCapacityType"?: string;
    /**
     * 弹性供应组到期时，是否释放组内实例。取值范围：
     * - true：释放组内实例。
     * - false：只将组内实例移出弹性供应组。
     * @example `false`
     */
    "TerminateInstancesWithExpiration"?: boolean;
    /**
     * 弹性供应组内抢占式实例的最高价格。
     * > 同时设置了MaxSpotPrice和LaunchTemplateConfig.N.MaxPrice时，以最低值为准。LaunchTemplateConfig.N.MaxPrice在创建弹性供应组时设置，且不可修改。
     * @example `0.5`
     */
    "MaxSpotPrice"?: number;
    /**
     * 弹性供应组的目标总容量。取值范围：正整数。
     * 总容量必须大于等于PayAsYouGoTargetCapacity（指定的按量付费实例目标容量）和SpotTargetCapacity（指定的抢占式实例目标容量）取值之和。
     * @example `70`
     */
    "TotalTargetCapacity"?: string;
    /**
     * 弹性供应组内，按量付费实例的目标容量。取值范围：小于TotalTargetCapacity的参数取值。
     * @example `30`
     */
    "PayAsYouGoTargetCapacity"?: string;
    /**
     * 弹性供应组内，抢占式实例的目标容量。取值范围：小于TotalTargetCapacity的参数取值。
     * @example `30`
     */
    "SpotTargetCapacity"?: string;
    /**
     * 弹性供应组的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `apg-test`
     */
    "AutoProvisioningGroupName"?: string;
    /**
     * 扩展启动模板列表。
     */
    "LaunchTemplateConfig"?: {
        /**
         * 扩展启动模板中，ECS实例加入的虚拟交换机的ID。扩展模板中启动的ECS实例的可用区由虚拟交换机决定。
         * @example `vsw-sn5bsitu4lfzgc5o7****`
         */
        VSwitchId: string;
        /**
         * 扩展启动模板中，抢占式实例的价格上限。
         * @example `3`
         */
        MaxPrice: number;
        /**
         * 扩展启动模板的优先级，取值为0时优先级最高。取值范围：大于0。
         * @example `1`
         */
        Priority: number;
        /**
         * 扩展启动模板对应的实例规格，N的取值范围：1~20。取值范围：请参见[实例规格族](~~25378~~)。
         * @example `ecs.g5.large`
         */
        InstanceType: string;
        /**
         * 扩展启动模板中，实例规格的权重。取值越高，单台实例满足计算力需求的能力越大，所需的实例数量越小。取值范围：大于0。
         * 您可以根据指定实例规格的计算力和集群单节点最低计算力得出权重值。假设单节点最低计算力为8 vCPU、60 GiB，则：
         * - 8 vCPU、60 GiB的实例规格权重可以设置为1。
         * - 16 vCPU、120 GiB的实例规格权重可以设置为2。
         * @example `2`
         */
        WeightedCapacity: number;
    }[];
}
