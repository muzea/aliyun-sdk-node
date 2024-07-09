export interface DescribeRouterInterfacesRequest {
    "RegionId": string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Filter"?: {
        Key: string;
        Value: string[];
    }[];
}
