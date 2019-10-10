interface SubmitSqlFlashbackTaskRequest {
    "RegionId"?: string;
    "DbName": string;
    "StartTime": string;
    "EndTime": string;
    "RecallRestoreType": number;
    "DrdsInstanceId": string;
    "TraceId"?: string;
    "TableName"?: string;
    "SqlType"?: string;
    "SqlPk"?: string;
    "RecallType"?: number;
}
export { SubmitSqlFlashbackTaskRequest };