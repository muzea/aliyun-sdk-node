interface DescribeCloudProductFieldStatisticsResponse {
    "code": number;
    "data": {
        "GroupedFields": {
            "InstanceCount": number;
            "RiskInstanceCount": number;
            "categoryCount": {
                "MachineType": number;
                "Count": number;
            }[];
        };
    };
    "requestId": string;
    "success": boolean;
}
export { DescribeCloudProductFieldStatisticsResponse };