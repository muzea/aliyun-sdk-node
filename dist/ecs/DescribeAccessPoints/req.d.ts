export interface DescribeAccessPointsRequest {
    "RegionId": string;
    "Type"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Filter"?: {
        Key: string;
        Value: string[];
    }[];
}
