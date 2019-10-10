interface SetupTableRequest {
    "RegionId"?: string;
    "DbName": string;
    "AllowFullTableScan": boolean;
    "TableName": string[];
    "DrdsInstanceId": string;
}
export { SetupTableRequest };