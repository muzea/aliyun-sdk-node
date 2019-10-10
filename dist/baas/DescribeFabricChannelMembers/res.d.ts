interface DescribeFabricChannelMembersResponse {
    "Result": {
        "OrganizationName": string;
        "InviteTime": string;
        "ChannelId": string;
        "WithPeer": boolean;
        "OrganizationDescription": string;
        "OrganizationDomain": string;
        "State": string;
        "OrganizationId": string;
        "AcceptTime": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricChannelMembersResponse };