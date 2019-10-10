interface CreateFleetRequest {
    "RegionId": string;
    "TotalTargetCapacity": string;
    "LaunchTemplateId": string;
    "OwnerId"?: number;
    "FleetName"?: string;
    "FleetType"?: string;
    "SpotAllocationStrategy"?: string;
    "SpotInstanceInterruptionBehavior"?: string;
    "SpotInstancePoolsToUseCount"?: number;
    "OnDemandAllocationStrategy"?: string;
    "ExcessCapacityTerminationPolicy"?: string;
    "ValidFrom"?: string;
    "ValidUntil"?: string;
    "TerminateInstancesWithExpiration"?: boolean;
    "TerminateInstances"?: boolean;
    "MaxSpotPrice"?: number;
    "OnDemandTargetCapacity"?: string;
    "SpotTargetCapacity"?: string;
    "DefaultTargetCapacityType"?: string;
    "FillGapWithOnDemand"?: string;
    "LaunchTemplateVersion"?: string;
    "LaunchTemplateConfig"?: string[];
    "Description"?: string;
}
export { CreateFleetRequest };