interface DescribeAntChainMembersResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Pagination": {
                "TotalCount": number;
                "PageSize": number;
                "PageNumber": number;
            };
            "Members": {
                "Status": string;
                "Role": string;
                "MemberId": string;
                "JoinTime": number;
                "MemberName": string;
            }[];
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainMembersResponse };