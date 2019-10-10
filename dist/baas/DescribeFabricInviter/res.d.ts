interface DescribeFabricInviterResponse {
    "Result": {
        "ConsortiumId": string;
        "ExpireTime": number;
        "InviterId": number;
        "ConsortiumName": string;
        "InviterName": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricInviterResponse };