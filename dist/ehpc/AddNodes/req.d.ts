interface AddNodesRequest {
    "RegionId": string;
    "ClusterId": string;
    "Count": number;
    "ImageOwnerAlias"?: string;
    "ImageId"?: string;
    "InstanceType"?: string;
    "ComputeSpotStrategy"?: string;
    "ComputeSpotPriceLimit"?: string;
    "EcsChargeType"?: string;
    "Period"?: number;
    "PeriodUnit"?: string;
    "AutoRenew"?: string;
    "AutoRenewPeriod"?: number;
    "JobQueue"?: string;
    "CreateMode"?: string;
    "SystemDiskType"?: string;
    "SystemDiskSize"?: number;
    "ZoneId"?: string;
    "VSwitchId"?: string;
}
export { AddNodesRequest };