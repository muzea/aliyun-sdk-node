interface DescribeAntChainTransactionStatisticsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Dt": string;
            "AntChainId": string;
            "CreatTime": number;
            "TransCount": number;
            "LastSumBlockHeight": number;
        }[];
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainTransactionStatisticsResponse };