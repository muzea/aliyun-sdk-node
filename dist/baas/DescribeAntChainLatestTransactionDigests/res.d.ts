interface DescribeAntChainLatestTransactionDigestsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "transactionV10Type": string;
            "createTime": number;
            "from": string;
            "to": string;
            "hash": string;
        }[];
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainLatestTransactionDigestsResponse };