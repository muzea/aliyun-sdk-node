interface DescribeVsStreamsPublishListRequest {
    "RegionId"?: string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "DomainName": string;
    "AppName"?: string;
    "StreamName"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
    "StreamType"?: string;
    "QueryType"?: string;
    "OrderBy"?: string;
}
export { DescribeVsStreamsPublishListRequest };