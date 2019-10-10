interface DescribeFabricConsortiumAdminStatusResponse {
    "Result": {
        "ConsortiumId": string;
        "ConsortiumAdministrator": boolean;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumAdminStatusResponse };