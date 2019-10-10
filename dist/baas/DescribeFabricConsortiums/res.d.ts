interface DescribeFabricConsortiumsResponse {
    "Result": {
        "Domain": string;
        "ConsortiumId": string;
        "OrganizationCount": number;
        "ChannelCount": number;
        "ConsortiumName": string;
        "DeleteTime": string;
        "OwnerUid": number;
        "State": string;
        "RegionId": string;
        "RequestId": string;
        "CreateTime": string;
        "CodeName": string;
        "OwnerName": string;
        "OwnerBid": string;
        "ChannelPolicy": string;
        "SpecName": string;
        "SupportChannelConfig": boolean;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumsResponse };