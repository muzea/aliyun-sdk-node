export interface DescribeForwardTableEntriesRequest {
    "RegionId": string;
    "ForwardTableId": string;
    "ForwardEntryId"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
