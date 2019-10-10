interface DescribePropertySoftwareDetailResponse {
    "code": string;
    "data": {
        "Propertys": {
            "Path": string;
            "InstanceName": any;
            "Ip": any;
            "Name": string;
            "Create": number;
            "InstallTime": string;
            "Version": string;
            "Uuid": string;
        }[];
        "pageInfo": {
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
export { DescribePropertySoftwareDetailResponse };