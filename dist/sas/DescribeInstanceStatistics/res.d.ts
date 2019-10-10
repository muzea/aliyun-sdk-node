interface DescribeInstanceStatisticsResponse {
    "code": number;
    "requestId": string;
    "success": boolean;
    "data": {
        "EntEntityListity": {
            "Uuid": string;
            "Health": number;
            "Suspicious": number;
            "Vul": number;
        }[];
    };
}
export { DescribeInstanceStatisticsResponse };