interface DescribeFabricOrganizationResponse {
    "Result": {
        "OrganizationDescription": string;
        "Domain": string;
        "ZoneId": string;
        "OrganizationId": string;
        "OrganizationName": string;
        "ConsortiumCount": number;
        "UserCount": number;
        "State": string;
        "SpecName": string;
        "OwnerUid": number;
        "CAUrl": string;
        "CreateTime": string;
        "CANAME": string;
        "CodeName": string;
        "OwnerName": string;
        "PeerCount": number;
        "OwnerBid": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricOrganizationResponse };