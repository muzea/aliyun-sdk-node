interface DescribeFabricOrganizationDeletableResponse {
    "Result": {
        "Deletable": boolean;
        "OrganizationId": string;
        "CodeName": string;
        "Domain": string;
        "OrganizationDescription": string;
        "OrganizationName": string;
        "RegionId": string;
        "State": string;
        "ZoneId": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricOrganizationDeletableResponse };