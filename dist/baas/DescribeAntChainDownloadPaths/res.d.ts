interface DescribeAntChainDownloadPathsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "SdkUrl": string;
            "TrustCaUrl": string;
            "CaCrtUrl": string;
            "ClientCrtUrl": string;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainDownloadPathsResponse };