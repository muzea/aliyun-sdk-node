interface DescribePropertyUserItemResponse {
    "code": string;
    "data": {
        "PropertyItems": {
            "Count": number;
            "User": string;
        }[];
        "PageInfo": {
            "Count": number;
            "PageSize": number;
            "TotalCount": number;
            "CurrentPage": number;
        };
    };
    "success": boolean;
    "requestId": any;
    "message": string;
}
export { DescribePropertyUserItemResponse };