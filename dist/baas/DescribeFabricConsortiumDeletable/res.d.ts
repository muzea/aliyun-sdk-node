interface DescribeFabricConsortiumDeletableResponse {
    "Result": {
        "ConsortiumId": string;
        "Deletable": boolean;
        "CodeName": string;
        "Description": string;
        "Domain": string;
        "Name": string;
        "State": string;
        "RegionId": string;
        "ZoneId": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumDeletableResponse };