interface DescribeAntChainContractProjectsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Pagination": {
                "TotalCount": number;
                "PageSize": number;
                "PageNumber": number;
            };
            "ContractProjects": {
                "ConsortiumId": string;
                "ProjectName": string;
                "CreateTime": number;
                "ProjectVersion": string;
                "UpdateTime": number;
                "ProjectId": string;
                "ProjectDescription": string;
            }[];
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainContractProjectsResponse };