interface DescribeFabricOrganizationChannelsResponse {
    "Result": {
        "ConsortiumName": string;
        "Deleted": boolean;
        "ConsortiumId": string;
        "UpdateTime": string;
        "ChaincodeCount": number;
        "OwnerBid": string;
        "ChannelId": string;
        "Name": string;
        "BlockCount": number;
        "OwnerUid": number;
        "DeleteTime": string;
        "State": string;
        "RequestId": string;
        "CreateTime": string;
        "MemberCount": number;
        "OwnerName": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricOrganizationChannelsResponse };