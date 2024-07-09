export interface SwitchDBInstanceHARequest {
    "RegionId": string;
    "DBInstanceName": string;
    "TargetPrimaryRegionId"?: string;
    "TargetPrimaryAzoneId"?: string;
    "SwitchTimeMode"?: string;
    "SwitchTime"?: string;
}
