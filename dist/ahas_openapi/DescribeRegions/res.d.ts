export interface DescribeRegionsResponse {
    Message: string;
    RequestId: string;
    Regions: {
        LocalName: string;
        RegionEndpoint: string;
        RegionId: string;
    }[];
    Code: string;
    Success: boolean;
}
