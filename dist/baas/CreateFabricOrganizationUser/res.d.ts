interface CreateFabricOrganizationUserResponse {
    "result": {
        "OrganizationId": string;
        "CreateTime": string;
        "ExpireTime": string;
        "Fullname": string;
        "Username": string;
        "Password": string;
    };
    "RequestId": string;
    "ErrorCode": number;
    "Success": boolean;
}
export { CreateFabricOrganizationUserResponse };