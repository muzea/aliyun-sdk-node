interface DescribePropertyProcItemResponse {
    "code": string;
    "data": {
        "PropertyItems": {
            "Name": string;
            "Count": number;
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
export { DescribePropertyProcItemResponse };