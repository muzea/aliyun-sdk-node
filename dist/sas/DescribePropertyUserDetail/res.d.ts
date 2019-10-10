interface DescribePropertyUserDetailResponse {
    "code": string;
    "data": {
        "PageInfo": {
            "Count": number;
            "PageSize": number;
            "TotalCount": number;
            "CurrentPage": number;
        };
        "Propertys": {
            "LastLoginTime": string;
            "GroupName": string[];
            "IsRoot": string;
            "InstanceName": any;
            "AccountsExpirationDate": string;
            "PasswordExpirationDate": string;
            "Ip": any;
            "Create": number;
            "User": string;
            "Uuid": string;
            "LastLoginIp": string;
        }[];
    };
    "success": boolean;
    "requestId": any;
    "message": string;
}
export { DescribePropertyUserDetailResponse };