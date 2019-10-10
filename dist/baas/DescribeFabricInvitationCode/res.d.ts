interface DescribeFabricInvitationCodeResponse {
    "Result": {
        "Url": string;
        "ExpireTime": string;
        "Accepted": string;
        "Code": string;
        "ConsortiumId": string;
        "Email": string;
        "InvitationId": number;
        "SendTime": string;
        "SenderId": number;
        "SenderBid": string;
        "SenderName": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricInvitationCodeResponse };