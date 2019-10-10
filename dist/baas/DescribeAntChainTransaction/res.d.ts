interface DescribeAntChainTransactionResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Transaction": {
                "Nonce": string;
                "Extentions": any[];
                "TxType": string;
                "Value": string;
                "Gas": string;
                "Period": number;
                "To": string;
                "From": string;
                "Hash": string;
                "Signatures": string[];
                "Timestamp": number;
            };
            "CreateTime": number;
            "BlockVersion": number;
            "Hash": string;
            "BlockHeight": number;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainTransactionResponse };