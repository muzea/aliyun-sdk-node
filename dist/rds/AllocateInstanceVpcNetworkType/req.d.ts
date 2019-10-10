interface AllocateInstanceVpcNetworkTypeRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "TargetRegionId": string;
    "TargetZoneId": string;
    "TargetVpcId": string;
    "TargetVSwitchId": string;
    "OwnerId"?: number;
}
export { AllocateInstanceVpcNetworkTypeRequest };