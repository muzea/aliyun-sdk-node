interface CreateFabricChaincodeResponse {
    "Result": {
        "ChaincodeName": string;
        "ChannelId": string;
        "State": string;
        "ConsortiumId": string;
        "Creator": string;
        "CreateTime": number;
        "Install": string;
        "ChannelName": string;
        "ChaincodeVersion": string;
        "EndorsePolicy": string;
        "ChaincodeId": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { CreateFabricChaincodeResponse };