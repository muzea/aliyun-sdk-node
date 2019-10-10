interface DescribeFabricConsortiumConfigResponse {
    "Result": {
        "OrdererType": string[];
        "ChannelPolicy": string[];
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumConfigResponse };