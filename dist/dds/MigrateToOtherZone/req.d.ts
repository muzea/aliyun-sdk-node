interface MigrateToOtherZoneRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "ZoneId": string;
    "OwnerId"?: number;
    "EffectiveTime"?: string;
    "VSwitchId"?: string;
}
export { MigrateToOtherZoneRequest };