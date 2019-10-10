interface DescribeTemplatesListRequest {
    "RegionId"?: string;
    "StartTime": string;
    "EndTime": string;
    "MaxRecordsPerPage": number;
    "PageNumbers": number;
    "OwnerId"?: number;
    "DBInstanceId": string;
    "MinAvgConsume"?: number;
    "MaxAvgConsume"?: number;
    "MinAvgScanRows"?: number;
    "MaxAvgScanRows"?: number;
    "PagingId"?: string;
    "SortKey"?: string;
    "SortMethod"?: string;
    "SqType"?: string;
}
export { DescribeTemplatesListRequest };