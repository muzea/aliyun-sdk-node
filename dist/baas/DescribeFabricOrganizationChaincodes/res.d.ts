interface DescribeFabricOrganizationChaincodesResponse {
    "Result": {
        "ChaincodeName": string;
        "ChannelId": string;
        "State": string;
        "ConsortiumId": string;
        "Creator": string;
        "CreateTime": string;
        "Installed": string;
        "DeployTime": string;
        "ChannelName": string;
        "ChaincodeVersion": string;
        "EndorsePolicy": string;
        "ChaincodeId": string;
        "Message": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricOrganizationChaincodesResponse };