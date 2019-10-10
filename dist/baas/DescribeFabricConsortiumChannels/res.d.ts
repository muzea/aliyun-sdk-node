interface DescribeFabricConsortiumChannelsResponse {
    "result": {
        "BatchTimeout": number;
        "BlockCount": number;
        "ChaincodeCount": number;
        "ChannelId": string;
        "ChannelName": string;
        "ConsortiumId": string;
        "ConsortiumName": string;
        "CreateTime": string;
        "DeleteTime": string;
        "Deleted": string;
        "OwnerBid": string;
        "OwnerUid": number;
        "PreferredMaxBytes": number;
        "State": string;
        "SupportChannelConfig": string;
        "UpdateTime": string;
    };
    "RequestId": string;
    "ErrorCode": number;
    "Success": boolean;
}
export { DescribeFabricConsortiumChannelsResponse };