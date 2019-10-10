interface CheckFabricOrganizationDomainResponse {
    "Result": {
        "Prompt": string;
        "Domain": string;
        "Valid": boolean;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { CheckFabricOrganizationDomainResponse };