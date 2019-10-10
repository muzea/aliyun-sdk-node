interface DescribeFabricConsortiumOrderersResponse {
    "Result": {
        "OrdererName": string;
        "Port": number;
        "Domain": string;
        "CreateTime": string;
        "UpdateTime": string;
        "InstanceType": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumOrderersResponse };