interface InstantiateFabricChaincodeResponse {
    "Result": {
        "install": boolean;
        "channelName": string;
        "input": string;
        "ChaincodeName": string;
        "Path": string;
        "state": string;
        "chaincodeId": string;
        "type": number;
        "ChaincodeVersion": string;
        "ConsortiumId": string;
        "CreateTime": string;
        "EndorsePolicy": string;
        "Message": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { InstantiateFabricChaincodeResponse };