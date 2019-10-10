interface DeleteShardTasksRequest {
    "RegionId"?: string;
    "DbName": string;
    "TableName": string[];
    "DrdsInstanceId": string;
}
export { DeleteShardTasksRequest };