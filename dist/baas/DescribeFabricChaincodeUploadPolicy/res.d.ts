interface DescribeFabricChaincodeUploadPolicyResponse {
    "Result": {
        "Dir": string;
        "Host": string;
        "Policy": string;
        "Expire": number;
        "AccessId": string;
        "Signature": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricChaincodeUploadPolicyResponse };