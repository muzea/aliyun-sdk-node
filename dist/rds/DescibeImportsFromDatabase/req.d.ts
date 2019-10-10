interface DescibeImportsFromDatabaseRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "Engine": string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "ImportId"?: number;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescibeImportsFromDatabaseRequest };