export interface DescribeVirtualBorderRoutersForPhysicalConnectionRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Filter"?: {
        Key: string;
        Value: string[];
    }[];
}
