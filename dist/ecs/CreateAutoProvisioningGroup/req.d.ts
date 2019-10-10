interface CreateAutoProvisioningGroupRequest {
    /**
    * 弹性供应组所在地域的ID，您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 弹性供应组的目标总容量，由以下三个部分组成：
    * - **PayAsYouGoTargetCapacity**指定的按量付费实例目标容量。
    * - **SpotTargetCapacity**指定的抢占式实例目标容量。
    * - **PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之外的差额容量。
    * @example `60`
    */ "TotalTargetCapacity": string;
    /**
    * 弹性供应组关联的实例启动模板的ID，您可以调用[DescribeLaunchTemplates](~~73759~~)查询可用的实例启动模板。
    * 一个弹性供应组只能关联一个实例启动模板，但是可以通过**LaunchTemplateConfig**配置多个扩展启动模板。
    * @example `lt-bp1fgzds4bdogu03****`
    */ "LaunchTemplateId": string;
    /**
    * @example `123456`
    */ "OwnerId"?: number;
    /**
    * @example `123456`
    */ "ResourceGroupId"?: string;
    /**
    * 弹性供应组的名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `apg-test`
    */ "AutoProvisioningGroupName"?: string;
    /**
    * 弹性供应组的类型，可选值：
    * - **request**：一次性，供应组仅在启动时尝试一次交付实例集群，调度失败也不再重试。
    * - **maintain**：持续保持，供应组在启动时尝试交付实例集群，并持续监控实时容量和目标容量，未达到目标容量则尝试继续创建实例满足容量需求。
    * 默认值：**maintain**。
    * @example `maintain`
    */ "AutoProvisioningGroupType"?: string;
    /**
    * 抢占式实例的扩容策略，可选值：
    * - **lowest-price**：成本优化策略，选择价格最低的实例规格创建实例。
    * - **diversified**：均衡可用区分布策略，在扩展启动模板指定的可用区创建实例，尽量将实例集群均匀分布到所有可用区。
    * 默认值：**lowest-price**。
    * @example `diversified`
    */ "SpotAllocationStrategy"?: string;
    /**
    * 抢占式实例关停后的默认动作，可选值：
    * - **stop**：停止抢占式实例。
    * - **terminate**：释放抢占式实例。
    * 默认值：**stop**。
    * @example `terminate`
    */ "SpotInstanceInterruptionBehavior"?: string;
    /**
    * 在**SpotAllocationStrategy**为**lowest-price**时生效，弹性供应组选择价格最低的数个实例规格创建实例。
    * @example `2`
    */ "SpotInstancePoolsToUseCount"?: number;
    /**
    * 按量付费实例的扩容策略，可选值：
    * - **lowest-price**：成本优化策略，选择价格最低的实例规格创建实例。
    * - **prioritized**：优先级策略，按照**LaunchTemplateConfig.N.Priority**设定的优先级创建实例。
    * 默认值：**lowest-price**。
    * @example `prioritized`
    */ "PayAsYouGoAllocationStrategy"?: string;
    /**
    * 弹性供应组超过容量时，超额的抢占式实例的关停策略，可选值：
    * - **no-termination**：超额的抢占式实例继续运行。
    * - **termination**：关停超额的抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
    * 默认值：**no-termination**。
    * @example `termination`
    */ "ExcessCapacityTerminationPolicy"?: string;
    /**
    * 弹性供应组的启动时间，和**ValidUntil**结合确定有效时段。
    * 默认为立即生效。
    * @example `2019-04-01T15:10:20Z`
    */ "ValidFrom"?: string;
    /**
    * 弹性供应组的到期时间，和**ValidFrom**结合确定有效时段。
    * 默认为无限期。
    * @example `2019-06-01T15:10:20Z`
    */ "ValidUntil"?: string;
    /**
    * 弹性供应组到期时的关停策略，可选值：
    * - **true**：关停组内抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
    * - **false**：组内抢占式实例继续运行。
    * 默认值：**false**。
    * @example `true`
    */ "TerminateInstancesWithExpiration"?: boolean;
    /**
    * 删除弹性供应组时是否释放组内实例，可选值：
    * - **true**：释放组内实例。
    * - **false**：保留组内实例。
    * 默认值：**false**。
    * @example `true`
    */ "TerminateInstances"?: boolean;
    /**
    * 弹性供应组内抢占式实例的全局价格上限，同时设置**MaxSpotPrice**和**LaunchTemplateConfig.N.MaxPrice**时，以较低者为准。
    * @example `2`
    */ "MaxSpotPrice"?: number;
    /**
    * 弹性供应组内按量付费实例的目标容量。
    * @example `30`
    */ "PayAsYouGoTargetCapacity"?: string;
    /**
    * 弹性供应组内抢占式实例的目标容量。
    * @example `20`
    */ "SpotTargetCapacity"?: string;
    /**
    * 指定差额容量的类型，**PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之和小于**TotalTargetCapacity**时，您可以指定补齐差额容量的实例类型。可选值：
    * - **PayAsYouGo**：使用按量付费实例补齐差额容量。
    * - **Spot**：使用抢占式实例补齐差额容量。
    * 默认值：**Spot**。
    * @example `Spot`
    */ "DefaultTargetCapacityType"?: string;
    /**
    * 弹性供应组关联的实例启动模板的版本，您可以调用[DescribeLaunchTemplateVersions](~~73761~~)查询可用的实例启动模板版本。
    * @example `1`
    */ "LaunchTemplateVersion"?: string;
    "LaunchTemplateConfig"?: string[];
    /**
    * 弹性供应组的描述信息。
    * @example `test`
    */ "Description"?: string;
}
export { CreateAutoProvisioningGroupRequest };