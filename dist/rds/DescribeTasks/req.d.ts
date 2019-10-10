interface DescribeTasksRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "OwnerId"?: number;
    "StartTime"?: string;
    "EndTime"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
    "Status"?: string;
    "TaskAction"?: string;
}
export { DescribeTasksRequest };