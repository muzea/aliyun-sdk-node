interface DescribeAntChainContractProjectContentTreeResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "ProjectName": string;
            "ProjectVersion": string;
            "ProjectId": string;
            "Children": {
                "gmtModified": number;
                "children": {
                    "gmtModified": number;
                    "children": any[];
                    "name": string;
                    "id": string;
                    "gmtCreate": number;
                    "directory": boolean;
                    "projectId": string;
                    "content": string;
                    "parentId": string;
                }[];
                "name": string;
                "id": string;
                "gmtCreate": number;
                "directory": boolean;
                "projectId": string;
            }[];
            "ProjectDescription": string;
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainContractProjectContentTreeResponse };