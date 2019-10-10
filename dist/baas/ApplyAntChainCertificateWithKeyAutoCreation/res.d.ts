interface ApplyAntChainCertificateWithKeyAutoCreationResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "PrivateKey": string;
            "DownloadPath": {
                "SdkUrl": string;
                "TrustCaUrl": string;
                "CaCrtUrl": string;
                "ClientCrtUrl": string;
            };
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { ApplyAntChainCertificateWithKeyAutoCreationResponse };