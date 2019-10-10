interface DescribeAntChainInformationResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "AntChainId": string;
            "Version": string;
            "CreateTime": number;
            "AbnormalNodes": number;
            "Normal": boolean;
            "IsRole": boolean;
            "NodeNumber": number;
            "BlockHeight": number;
            "NodeInfos": {
                "Status": boolean;
                "Version": string;
                "NodeName": string;
                "BlockHeight": number;
            }[];
            "TransactionSum": number;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainInformationResponse };