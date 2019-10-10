interface CreateShardTaskRequest {
    "RegionId"?: string;
    "DbName": string;
    "SourceTableName": string;
    "TargetTableName": string;
    "TaskType": string;
    "DrdsInstanceId": string;
}
export { CreateShardTaskRequest };