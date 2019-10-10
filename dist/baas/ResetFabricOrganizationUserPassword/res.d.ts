interface ResetFabricOrganizationUserPasswordResponse {
    "Result": {
        "Password": string;
        "CreateTime": number;
        "ExpireTime": number;
        "Fullname": string;
        "Username": string;
        "OrganizationId": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { ResetFabricOrganizationUserPasswordResponse };