interface DescribeFabricOrganizationUsersResponse {
    "result": {
        "Attrs": string;
        "Username": string;
        "OrganizationId": string;
        "ChannelName": string;
        "CreateTime": string;
        "ExpireTime": string;
        "CallerBid": string;
        "CallerUid": number;
    };
    "RequestId": string;
    "ErrorCode": number;
    "Success": boolean;
}
export { DescribeFabricOrganizationUsersResponse };