interface SwitchDBInstanceHARequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "DBInstanceId": string;
    "NodeId"?: string;
    "SwitchType"?: number;
    "TargetInstanceId"?: number;
    "SourceInstanceId"?: number;
    "RoleIds"?: string;
}
export { SwitchDBInstanceHARequest };