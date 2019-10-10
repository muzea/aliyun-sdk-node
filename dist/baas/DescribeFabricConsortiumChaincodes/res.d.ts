interface DescribeFabricConsortiumChaincodesResponse {
    "Result": {
        "ChaincodeName": string;
        "ChannelId": string;
        "Install": boolean;
        "State": string;
        "ConsortiumId": string;
        "Type": number;
        "CreateTime": string;
        "ProviderId": string;
        "ChannelName": string;
        "ChaincodeVersion": string;
        "EndorsePolicy": string;
        "ChaincodeId": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumChaincodesResponse };