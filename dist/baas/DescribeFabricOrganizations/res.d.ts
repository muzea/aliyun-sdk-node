interface DescribeFabricOrganizationsResponse {
    "Result": {
        "OrganizationDescription": string;
        "Domain": string;
        "ZoneId": string;
        "OrganizationId": string;
        "OrganizationName": string;
        "ConsortiumCount": number;
        "UserCount": number;
        "SpecName": string;
        "State": string;
        "RegionId": string;
        "RequestId": string;
        "CreateTime": string;
        "CodeName": string;
        "PeerCount": number;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricOrganizationsResponse };