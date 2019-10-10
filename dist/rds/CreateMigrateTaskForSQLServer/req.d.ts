interface CreateMigrateTaskForSQLServerRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "DBName": string;
    "TaskType": string;
    "IsOnlineDB": string;
    "OSSUrls": string;
    "OwnerId"?: number;
}
export { CreateMigrateTaskForSQLServerRequest };