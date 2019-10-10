interface CreateAntChainContractProjectResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "ConsortiumId": string;
            "ProjectName": string;
            "CreateTime": number;
            "ProjectVersion": string;
            "UpdateTime": number;
            "ProjectId": string;
            "ProjectDescription": string;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { CreateAntChainContractProjectResponse };