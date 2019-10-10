interface DescribeAntChainConsortiumsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Pagination": {
                "TotalCount": number;
                "PageSize": number;
                "PageNumber": number;
            };
            "AntConsortiums": {
                "Status": string;
                "Role": string;
                "ConsortiumId": string;
                "ChainNum": number;
                "CreateTime": number;
                "ConsortiumDescription": string;
                "ConsortiumName": string;
                "MemberNum": number;
            }[];
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainConsortiumsResponse };