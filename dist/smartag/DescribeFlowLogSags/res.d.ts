interface DescribeFlowLogSagsResponse {
    "PageNumber": number;
    "Sags": {
        "Sag": {
            "Name": string;
            "SmartAGId": string;
        }[];
    };
    "TotalCount": number;
    "PageSize": number;
    "RequestId": string;
}
export { DescribeFlowLogSagsResponse };