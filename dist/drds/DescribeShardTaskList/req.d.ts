interface DescribeShardTaskListRequest {
    "RegionId"?: string;
    "DbName": string;
    "TaskType": string;
    "Query"?: string;
    "DrdsInstanceId": string;
    "PageSize"?: number;
    "CurrentPage"?: number;
}
export { DescribeShardTaskListRequest };