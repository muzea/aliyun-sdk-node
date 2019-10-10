interface CreateFabricConsortiumResponse {
    "result": {
        "CodeName": string;
        "ClusterState": string;
        "ConsortiumId": string;
        "CreateTime": string;
        "OwnerBid": number;
        "OrdererCount": number;
        "OrdererType": string;
        "ConsortiumName": string;
        "OrganizationCount": number;
        "ChannelCount": number;
        "ChannelPolicy": string;
        "Description": string;
        "Domain": string;
        "MemberCount": number;
        "ServiceState": string;
    };
    "RequestId": string;
    "ErrorCode": number;
    "Success": boolean;
}
export { CreateFabricConsortiumResponse };