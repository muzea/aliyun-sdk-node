interface CreateAntChainAccountWithKeyPairAutoCreationResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Account": string;
            "AntChainId": string;
            "AccountRecoverPrivateKey": string;
            "AccountRecoverPublicKey": string;
            "AccountPrivateKey": string;
            "AccountPublicKey": string;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { CreateAntChainAccountWithKeyPairAutoCreationResponse };