interface DescribeRegionsResponse {
    "RequestId": string;
    "Regions": {
        "Region": {
            "RegionId": string;
            "LocalName": string;
        }[];
    };
}
export { DescribeRegionsResponse };