interface SetupBroadcastTablesRequest {
    "RegionId"?: string;
    "DbName": string;
    "Active": boolean;
    "TableName": string[];
    "DrdsInstanceId": string;
}
export { SetupBroadcastTablesRequest };