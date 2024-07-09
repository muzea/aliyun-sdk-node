export interface DescribeVirtualBorderRoutersRequest {
    "RegionId": string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Filter"?: {
        Key: string;
        Value: string[];
    }[];
}
