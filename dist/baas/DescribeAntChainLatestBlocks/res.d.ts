interface DescribeAntChainLatestBlocksResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "blockHash": string;
            "previousHash": string;
            "size": number;
            "createTime": number;
            "transactionSize": number;
            "alias": string;
            "bizData": string;
            "version": number;
            "rootTxHash": string;
            "height": number;
        }[];
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainLatestBlocksResponse };