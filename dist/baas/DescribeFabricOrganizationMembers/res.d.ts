interface DescribeFabricOrganizationMembersResponse {
    "Result": {
        "OrganizationId": string;
        "OrganizationName": string;
        "JoinedTime": string;
        "ConsortiumName": string;
        "Description": string;
        "Domain": string;
        "State": string;
        "ConsortiumId": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricOrganizationMembersResponse };