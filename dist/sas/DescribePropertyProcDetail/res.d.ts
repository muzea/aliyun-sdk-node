interface DescribePropertyProcDetailResponse {
    "code": string;
    "data": {
        "PageInfo": {
            "Count": number;
            "PageSize": number;
            "TotalCount": number;
            "CurrentPage": number;
        };
        "Propertys": {
            "InstanceName": any;
            "Pname": string;
            "Euidname": string;
            "Ip": any;
            "Pid": string;
            "Uuid": string;
            "Path": string;
            "Cmdline": string;
            "Name": string;
            "Create": number;
            "StartTime": string;
            "User": string;
            "Md5": string;
        }[];
    };
    "success": boolean;
    "requestId": any;
    "message": string;
}
export { DescribePropertyProcDetailResponse };