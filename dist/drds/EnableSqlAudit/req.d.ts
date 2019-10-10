interface EnableSqlAuditRequest {
    "RegionId"?: string;
    "DbName": string;
    "DrdsInstanceId": string;
    "IsRecall"?: boolean;
    "RecallStartTimestamp"?: string;
    "RecallEndTimestamp"?: string;
}
export { EnableSqlAuditRequest };