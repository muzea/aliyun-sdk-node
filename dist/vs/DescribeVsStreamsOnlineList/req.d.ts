interface DescribeVsStreamsOnlineListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "DomainName": string;
    "AppName"?: string;
    "StreamName"?: string;
    "PageSize"?: number;
    "PageNum"?: number;
    "StreamType"?: string;
    "StartTime"?: string;
    "EndTime"?: string;
    "QueryType"?: string;
    "OrderBy"?: string;
}
export { DescribeVsStreamsOnlineListRequest };