interface DescribeAntChainBlockResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "AntChainId": string;
            "Version": number;
            "TransactionSize": number;
            "BlockHash": string;
            "CreateTime": number;
            "PreviousHash": string;
            "Height": number;
            "TransSummaryList": any[];
            "RootTxHash": string;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainBlockResponse };