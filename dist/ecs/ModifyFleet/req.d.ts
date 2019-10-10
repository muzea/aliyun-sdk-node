interface ModifyFleetRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "FleetId"?: string;
    "ExcessCapacityTerminationPolicy"?: string;
    "DefaultTargetCapacityType"?: string;
    "TerminateInstancesWithExpiration"?: boolean;
    "MaxSpotPrice"?: number;
    "TotalTargetCapacity"?: string;
    "OnDemandTargetCapacity"?: string;
    "SpotTargetCapacity"?: string;
}
export { ModifyFleetRequest };