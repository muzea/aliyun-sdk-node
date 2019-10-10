interface QueryTaskDetailHistoryRequest {
    "RegionId"?: string;
    "TaskNo": string;
    "PageSize": number;
    "Lang"?: string;
    "UserClientIp"?: string;
    "DomainName"?: string;
    "DomainNameCursor"?: string;
    "TaskStatus"?: number;
    "TaskDetailNoCursor"?: string;
}
export { QueryTaskDetailHistoryRequest };