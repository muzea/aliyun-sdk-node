interface ModifyDBInstanceConnectionStringRequest {
    "RegionId"?: string;
    "NewConnectionString": string;
    "CurrentConnectionString": string;
    "OwnerId"?: number;
    "DBInstanceId": string;
    "Port"?: string;
    "IPType"?: string;
}
export { ModifyDBInstanceConnectionStringRequest };