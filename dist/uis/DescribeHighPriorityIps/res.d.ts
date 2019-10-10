interface DescribeHighPriorityIpsResponse {
    "HighPriorityIps": {
        "HighPriorityIp": {
            "AreaId": string;
            "Destination": string;
        }[];
    };
    "RequestId": string;
}
export { DescribeHighPriorityIpsResponse };