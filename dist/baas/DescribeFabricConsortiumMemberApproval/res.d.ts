interface DescribeFabricConsortiumMemberApprovalResponse {
    "Result": {
        "ConfirmTime": string;
        "ConsortiumName": string;
        "State": string;
        "ConsortiumId": string;
        "DomainName": string;
        "ChannelCreatePolicy": string;
        "OrganizationId": string;
        "OrganizationName": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumMemberApprovalResponse };