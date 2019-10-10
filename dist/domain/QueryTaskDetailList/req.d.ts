interface QueryTaskDetailListRequest {
    "RegionId"?: string;
    "TaskNo": string;
    "PageNum": number;
    "PageSize": number;
    "TaskStatus"?: number;
    "Lang"?: string;
    "DomainName"?: string;
    "InstanceId"?: string;
    "UserClientIp"?: string;
}
export { QueryTaskDetailListRequest };