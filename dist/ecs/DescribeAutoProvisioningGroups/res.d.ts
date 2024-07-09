export interface DescribeAutoProvisioningGroupsResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `745CEC9F-0DD7-4451-9FE7-8B752F39****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的弹性供应组的个数。
     * @example `10`
     */
    TotalCount: number;
    AutoProvisioningGroups: {
        /**
         * 弹性供应组的详细信息。
         */
        AutoProvisioningGroup: {
            /**
             * 创建时间。
             * @example `2019-04-01T15:10:20Z`
             */
            CreationTime: string;
            /**
             * 弹性供应组的名称。
             * @example `EcsDocTest`
             */
            AutoProvisioningGroupName: string;
            /**
             * 弹性供应组的状态。可能值：
             * - submitted：完成创建，但弹性供应组尚未开始执行调度任务。
             * - active：弹性供应组已开始执行调度任务。
             * - deleted：弹性供应组已删除。
             * - delete-running：弹性供应组删除中。
             * - modifying：弹性供应组修改中。
             * @example `submitted`
             */
            Status: string;
            /**
             * 删除弹性供应组时，是否释放组内实例。可能值：
             * - true：释放组内实例。
             * - false：保留组内实例。
             * @example `false`
             */
            TerminateInstances: boolean;
            /**
             * 抢占式实例的最高价格。
             * > 同时设置了MaxSpotPrice和LaunchTemplateConfig.N.MaxPrice时，以最低值为准。
             * LaunchTemplateConfig.N.MaxPrice在创建弹性供应组时设置，且不可修改。
             * @example `2`
             */
            MaxSpotPrice: number;
            /**
             * 弹性供应组整体调度的执行状态。可能值：
             * - fulfilled：已成功完成调度任务。
             * - pending-fulfillment：创建实例中。
             * - pending-termination：移除实例中。
             * - error：调度时发生异常，未能交付实例集群。
             * @example `fulfilled`
             */
            State: string;
            /**
             * 关联的实例启动模板的ID。
             * @example `lt-bp1fgzds4bdogu03****`
             */
            LaunchTemplateId: string;
            /**
             * 弹性供应组的启动时间，和`ValidUntil`结合确定有效时段。
             * @example `2019-04-01T15:10:20Z`
             */
            ValidFrom: string;
            /**
             * 关联的实例启动模板的版本。
             * @example `1`
             */
            LaunchTemplateVersion: string;
            /**
             * 弹性供应组到期时，是否释放组内实例。可能值：
             * - true：释放组内实例。
             * - false：只将组内实例移出弹性供应组。
             * @example `true`
             */
            TerminateInstancesWithExpiration: boolean;
            /**
             * 所在地域的ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 弹性供应组的到期时间，和`ValidFrom`结合确定有效时段。
             * @example `2019-06-01T15:10:20Z`
             */
            ValidUntil: string;
            /**
             * 交付类型。可能值：
             * - request：一次性。供应组仅在启动时交付实例集群，调度失败后不再重试。
             * - maintain：持续供应。供应组在启动时尝试交付实例集群，并监控实时容量，未达到目标容量则尝试继续创建ECS实例。
             * @example `maintain`
             */
            AutoProvisioningGroupType: string;
            /**
             * 弹性供应组ID。
             * @example `apg-sn54avj8htgvtyh8****`
             */
            AutoProvisioningGroupId: string;
            /**
             * 弹性供应组实时容量超过目标容量并触发缩容时，是否释放缩容的实例。可能值：
             * - termination：释放缩容的实例。
             * - no-termination：只将缩容的实例移出弹性供应组。
             * @example `termination`
             */
            ExcessCapacityTerminationPolicy: string;
            /**
             * 弹性供应组所属的资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            LaunchTemplateConfigs: {
                /**
                 * 扩展启动模板的详细信息。
                 */
                LaunchTemplateConfig: {
                    /**
                     * 扩展启动模板对应实例规格的价格上限。
                     * @example `3`
                     */
                    MaxPrice: number;
                    /**
                     * 扩展启动模板对应的实例规格的优先级，取值为0时最高。
                     * @example `1`
                     */
                    Priority: number;
                    /**
                     * 扩展启动模板对应的虚拟交换机的ID。
                     * @example `vsw-sn5bsitu4lfzgc5o7****`
                     */
                    VSwitchId: string;
                    /**
                     * 扩展启动模板对应的实例规格的权重。
                     * @example `2`
                     */
                    WeightedCapacity: number;
                    /**
                     * 扩展启动模板对应的实例规格。
                     * @example `ecs.g5.large`
                     */
                    InstanceType: string;
                }[];
            };
            /**
             * 抢占式实例相关的策略。
             */
            SpotOptions: {
                /**
                 * 弹性供应组选择价格最低的实例规格创建实例的数量。
                 * > 该参数在创建弹性供应组时被设置，且不可修改。
                 * @example `2`
                 */
                InstancePoolsToUseCount: number;
                /**
                 * 创建抢占式实例的策略。可能值：
                 * - lowest-price：成本优化策略。选择价格最低的实例规格。
                 * - diversified：均衡可用区分布策略。在扩展启动模板指定的可用区内创建实例，均匀分布到各可用区。
                 * @example `diversified`
                 */
                AllocationStrategy: string;
                /**
                 * 停止了超额的抢占式实例后的下一步动作。可能值：
                 * - stop：保持停止状态。
                 * - terminate：释放。
                 * @example `stop`
                 */
                InstanceInterruptionBehavior: string;
            };
            /**
             * 按量付费实例相关的策略。
             */
            PayAsYouGoOptions: {
                /**
                 * 创建按量付费实例的策略。可能值：
                 * - lowest-price：成本优化策略。选择价格最低的实例规格。
                 * - prioritized：优先级策略。按照LaunchTemplateConfig.N.Priority设定的优先级创建实例。
                 * > LaunchTemplateConfig.N.Priority在创建弹性供应组时设置，且不可修改。
                 * @example `prioritized`
                 */
                AllocationStrategy: string;
            };
            /**
             * 弹性供应组的目标容量设置。
             */
            TargetCapacitySpecification: {
                /**
                 * 抢占式实例的目标容量。
                 * @example `20`
                 */
                SpotTargetCapacity: number;
                /**
                 * 按量付费实例的目标容量。
                 * @example `30`
                 */
                PayAsYouGoTargetCapacity: number;
                /**
                 * `PayAsYouGoTargetCapacity`和`SpotTargetCapacity`之和小于`TotalTargetCapacity`时，指定的差额容量的计费方式。可能值：
                 * - PayAsYouGo：按量付费实例
                 * - Spot：抢占式实例
                 * @example `Spot`
                 */
                DefaultTargetCapacityType: string;
                /**
                 * 弹性供应组的目标总容量，由以下三个部分组成：
                 * - PayAsYouGoTargetCapacity
                 * - SpotTargetCapacity
                 * - PayAsYouGoTargetCapacity和SpotTargetCapacity之外的差额容量
                 * @example `60`
                 */
                TotalTargetCapacity: number;
            };
            Tags: {
                /**
                 * 弹性供应组绑定的标签。
                 */
                Tag: {
                    /**
                     * 弹性供应组的标签键。
                     * N 的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持 128 个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
                     * @example `TestKey`
                     */
                    TagKey: string;
                    /**
                     * 弹性供应组的标签值。
                     * N 的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持 128 个字符，不能包含http://或者https://。
                     * @example `TestValue`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
