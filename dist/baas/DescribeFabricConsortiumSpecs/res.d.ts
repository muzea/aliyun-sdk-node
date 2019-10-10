interface DescribeFabricConsortiumSpecsResponse {
    "Result": {
        "Name": string;
        "NumOfNodes": number;
        "WorkerDescription": string;
        "Enable": boolean;
        "MasterDescription": string;
        "Title": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricConsortiumSpecsResponse };