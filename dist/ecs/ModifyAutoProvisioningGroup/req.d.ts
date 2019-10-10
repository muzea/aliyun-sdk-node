interface ModifyAutoProvisioningGroupRequest {
    /**
    * 弹性供应组所在地域的ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `123456`
    */ "OwnerId"?: number;
    /**
    * 弹性供应组的ID。
    * @example `apg-uf6jel2bbl62wh13****`
    */ "AutoProvisioningGroupId"?: string;
    /**
    * 弹性供应组超过容量时，超额的抢占式实例的关停策略，可选值：
    * - **no-termination**：超额的抢占式实例继续运行。
    * - **termination**：关停超额的抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
    * > **SpotInstanceInterruptionBehavior**在创建弹性供应组时设置，且不可修改，更多信息请参见[CreateAutoProvisioningGroup](~~122738~~)。
    * @example `no-termination`
    */ "ExcessCapacityTerminationPolicy"?: string;
    /**
    * 指定差额容量的类型，**PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之和小于**TotalTargetCapacity**时，您可以指定补齐差额容量的实例类型。可选值：
    * - **PayAsYouGo**：使用按量付费实例补齐差额容量。
    * - **Spot**：使用抢占式实例补齐差额容量。
    * @example `PayAsYouGo`
    */ "DefaultTargetCapacityType"?: string;
    /**
    * 弹性供应组到期时的关停策略，可选值：
    * - **true**：关停组内抢占式实例，关停后的动作由**SpotInstanceInterruptionBehavior**指定。
    * - **false**：组内抢占式实例继续运行。
    * > **SpotInstanceInterruptionBehavior**在创建弹性供应组时设置，且不可修改，更多信息请参见[CreateAutoProvisioningGroup](~~122738~~)。
    * @example `false`
    */ "TerminateInstancesWithExpiration"?: boolean;
    /**
    * 弹性供应组内抢占式实例的全局价格上限，同时设置**MaxSpotPrice**和**LaunchTemplateConfig.N.MaxPrice**时，以较低者为准。
    * > **LaunchTemplateConfig.N.MaxPrice**在创建弹性供应组时设置，且不可修改，更多信息请参见[CreateAutoProvisioningGroup](~~122738~~)。
    * @example `8`
    */ "MaxSpotPrice"?: number;
    /**
    * 弹性供应组的目标总容量，由以下三个部分组成：
    * - **PayAsYouGoTargetCapacity**指定的按量付费实例目标容量。
    * - **SpotTargetCapacity**指定的抢占式实例目标容量。
    * - **PayAsYouGoTargetCapacity**和**SpotTargetCapacity**之外的差额容量。
    * @example `10`
    */ "TotalTargetCapacity"?: string;
    /**
    * 弹性供应组内按量付费实例的目标容量。
    * @example `5`
    */ "PayAsYouGoTargetCapacity"?: string;
    /**
    * 弹性供应组内抢占式实例的目标容量。
    * @example `5`
    */ "SpotTargetCapacity"?: string;
    "AutoProvisioningGroupName"?: string;
}
export { ModifyAutoProvisioningGroupRequest };