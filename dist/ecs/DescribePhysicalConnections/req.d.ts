export interface DescribePhysicalConnectionsRequest {
    "RegionId": string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "ClientToken"?: string;
    "UserCidr"?: string;
    "Filter"?: {
        Key: string;
        Value: string[];
    }[];
}
