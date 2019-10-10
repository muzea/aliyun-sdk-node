interface DescribePropertyPortDetailResponse {
    "code": string;
    "data": {
        "Propertys": {
            "BindIp": string;
            "Port": string;
            "InstanceName": any;
            "Proto": string;
            "Ip": any;
            "Create": number;
            "ProcName": string;
            "Uuid": string;
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
export { DescribePropertyPortDetailResponse };