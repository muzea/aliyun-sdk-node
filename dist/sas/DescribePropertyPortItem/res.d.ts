interface DescribePropertyPortItemResponse {
    "code": string;
    "data": {
        "PageInfo": {
            "Count": number;
            "PageSize": number;
            "TotalCount": number;
            "CurrentPage": number;
        };
        "PropertyItems": {
            "Port": string;
            "Proto": string;
            "Count": number;
        }[];
    };
    "success": boolean;
    "requestId": any;
    "message": string;
}
export { DescribePropertyPortItemResponse };