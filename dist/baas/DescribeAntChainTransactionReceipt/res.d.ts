interface DescribeAntChainTransactionReceiptResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Data": string;
            "Logs": string[];
            "GasUsed": string;
            "Result": number;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainTransactionReceiptResponse };