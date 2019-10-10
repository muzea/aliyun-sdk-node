interface CreateAntChainContractContentResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "ContentName": string;
            "Content": string;
            "CreateTime": number;
            "UpdateTime": number;
            "ProjectId": string;
            "ParentContentId": string;
            "IsDirectory": boolean;
            "ContentId": string;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { CreateAntChainContractContentResponse };