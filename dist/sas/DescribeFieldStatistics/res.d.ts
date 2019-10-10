interface DescribeFieldStatisticsResponse {
    "code": number;
    "data": {
        "GroupedFields": {
            "InstanceCount": number;
            "RiskInstanceCount": number;
            "UnProtectedInstanceCount": number;
            "GroupCount": number;
            "RegionCount": number;
            "VpcCount": number;
        };
    };
    "requestId": string;
    "success": boolean;
}
export { DescribeFieldStatisticsResponse };