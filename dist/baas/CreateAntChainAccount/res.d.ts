interface CreateAntChainAccountResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Account": string;
            "AntChainId": string;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { CreateAntChainAccountResponse };