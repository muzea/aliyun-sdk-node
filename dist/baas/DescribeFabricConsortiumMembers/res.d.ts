interface DescribeFabricConsortiumMembersResponse {
    "Result": {
        "OrganizationName": string;
        "Description": string;
        "Domain": string;
        "JoinedTime": string;
        "ConsortiumId": string;
        "OrganizationId": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumMembersResponse };