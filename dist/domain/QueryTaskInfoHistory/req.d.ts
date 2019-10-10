interface QueryTaskInfoHistoryRequest {
    "RegionId"?: string;
    "PageSize": number;
    "UserClientIp"?: string;
    "Lang"?: string;
    "BeginCreateTime"?: number;
    "EndCreateTime"?: number;
    "CreateTimeCursor"?: number;
    "TaskNoCursor"?: string;
}
export { QueryTaskInfoHistoryRequest };