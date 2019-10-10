interface CreateFabricOrganizationResponse {
    "result": {
        "CodeName": string;
        "ClusterState": string;
        "OrganizationId": string;
        "CreateTime": string;
        "OwnerBid": number;
        "OrganizationName": string;
        "SpecName": string;
        "ConsortiumCount": number;
        "PeerCount": number;
        "Description": string;
        "Domain": string;
        "UserCount": number;
        "ServiceState": string;
    };
    "RequestId": string;
    "ErrorCode": number;
    "Success": boolean;
}
export { CreateFabricOrganizationResponse };