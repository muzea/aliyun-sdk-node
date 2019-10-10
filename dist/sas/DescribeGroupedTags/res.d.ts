interface DescribeGroupedTagsResponse {
    "code": number;
    "data": {
        "GroupedFileds": {
            "Name": string;
            "Count": number;
            "TagId": number;
        }[];
    };
    "requestId": string;
    "success": boolean;
}
export { DescribeGroupedTagsResponse };