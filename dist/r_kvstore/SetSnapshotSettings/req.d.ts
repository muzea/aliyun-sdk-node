interface SetSnapshotSettingsRequest {
    "RegionId"?: string;
    "DayList": number;
    "OwnerId"?: number;
    "InstanceId": string;
    "BeginHour"?: number;
    "EndHour"?: number;
    "RetentionDay"?: number;
    "MaxAutoSnapshots"?: number;
    "MaxManualSnapshots"?: number;
}
export { SetSnapshotSettingsRequest };