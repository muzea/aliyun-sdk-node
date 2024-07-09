export interface DescribeHaVipsRequest {
    "RegionId": string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Filter": {
        Key: string;
        Value: string[];
    }[];
}
