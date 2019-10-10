interface JoinFabricChannelResponse {
    "Result": {
        "InviteTime": string;
        "ChannelId": string;
        "WithPeer": boolean;
        "ApproveTime": string;
        "ConfirmTime": string;
        "DestroyTime": string;
        "State": string;
        "OrganizationId": string;
        "AcceptTime": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { JoinFabricChannelResponse };