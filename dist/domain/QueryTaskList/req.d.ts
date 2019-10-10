interface QueryTaskListRequest {
    "RegionId"?: string;
    "PageNum": number;
    "PageSize": number;
    "UserClientIp"?: string;
    "Lang"?: string;
    "BeginCreateTime"?: number;
    "EndCreateTime"?: number;
}
export { QueryTaskListRequest };