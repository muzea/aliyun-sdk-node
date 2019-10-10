interface DescribeAllGroupsResponse {
    "code": number;
    "requestId": string;
    "success": boolean;
    "data": {
        "Groups": {
            "GroupId": number;
            "GroupName": string;
        };
    };
}
export { DescribeAllGroupsResponse };