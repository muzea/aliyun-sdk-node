interface MigrateToOtherRegionRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "TargetRegionId": string;
    "TargetZoneId": string;
    "TargetVpcId": string;
    "TargetVSwitchId": string;
    "OwnerId"?: number;
    "SwitchTime"?: string;
    "EffectiveTime"?: string;
}
export { MigrateToOtherRegionRequest };