interface DescribeAntChainNodesResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "endpoints": {
                "port": string;
                "ip": string;
            }[];
            "nodeState": number;
            "publicKey": string;
            "nodeType": number;
            "nodeId": string;
        }[];
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainNodesResponse };