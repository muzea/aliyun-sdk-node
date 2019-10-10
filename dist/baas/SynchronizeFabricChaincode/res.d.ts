interface SynchronizeFabricChaincodeResponse {
    "Result": {
        "ProviderId": string;
        "ProviderName": string;
        "ChaincodeName": string;
        "Input": string;
        "Install": boolean;
        "State": string;
        "Type": number;
        "ChannelName": string;
        "ConsortiumId": string;
        "ChaincodeVersion": string;
        "ChaincodeId": string;
        "Path": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { SynchronizeFabricChaincodeResponse };