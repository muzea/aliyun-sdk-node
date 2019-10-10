interface SwithcDBInstanceHARequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "DBInstanceId": string;
    "NodeId"?: string;
    "SwitchType"?: number;
    "TargetInstanceId"?: number;
    "SourceInstanceId"?: number;
}
export { SwithcDBInstanceHARequest };