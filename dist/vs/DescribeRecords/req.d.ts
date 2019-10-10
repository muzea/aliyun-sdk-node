interface DescribeRecordsRequest {
    "RegionId"?: string;
    "StreamId": string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "Type": string;
    "SortBy"?: string;
    "SortDirection"?: string;
    "PageSize"?: number;
    "PageNum"?: number;
}
export { DescribeRecordsRequest };