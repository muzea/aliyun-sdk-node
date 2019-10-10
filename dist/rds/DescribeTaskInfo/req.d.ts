interface DescribeTaskInfoRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "TaskId": number;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { DescribeTaskInfoRequest };