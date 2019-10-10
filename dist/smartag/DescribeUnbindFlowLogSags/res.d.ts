interface DescribeUnbindFlowLogSagsResponse {
    "Sags": {
        "Sag": {
            "Name": string;
            "SmartAGId": string;
        }[];
    };
    "Count": number;
    "RequestId": string;
}
export { DescribeUnbindFlowLogSagsResponse };