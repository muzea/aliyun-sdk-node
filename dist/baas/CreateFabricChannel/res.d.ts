interface CreateFabricChannelResponse {
    "Result": {
        "ChannelId": string;
        "ConsortiumName": string;
        "ChannelName": string;
        "ConsortiumId": string;
        "CreateTime": string;
        "MaxMessageCount": number;
        "MemberCount": number;
        "OwnerBid": string;
        "OwnerUid": string;
        "OwnerName": string;
        "PreferredMaxBytes": number;
        "State": string;
        "SupportConfig": string;
        "UpdateTime": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { CreateFabricChannelResponse };