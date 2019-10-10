interface DescribeErrorLogRecordsRequest {
    "RegionId"?: string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "InstanceId": string;
    "NodeId"?: string;
    "SQLId"?: number;
    "RoleType"?: string;
    "DBName"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescribeErrorLogRecordsRequest };