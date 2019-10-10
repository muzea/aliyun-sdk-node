interface MigrateToOtherZoneRequest {
    "RegionId"?: string;
    "ZoneId": string;
    "OwnerId"?: number;
    "DBInstanceId": string;
    "VSwitchId"?: string;
    "EffectiveTime"?: string;
}
export { MigrateToOtherZoneRequest };