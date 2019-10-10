interface QueryChangeLogListRequest {
    "RegionId"?: string;
    "PageNum": number;
    "PageSize": number;
    "UserClientIp"?: string;
    "Lang"?: string;
    "DomainName"?: string;
    "StartDate"?: number;
    "EndDate"?: number;
}
export { QueryChangeLogListRequest };