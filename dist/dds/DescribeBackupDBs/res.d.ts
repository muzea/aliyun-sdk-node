interface DescribeBackupDBsResponse {
    "Databases": {
        "Database": {
            "DBName": string;
        }[];
    };
    "PageNumber": number;
    "TotalCount": number;
    "PageSize": number;
    "RequestId": string;
}
export { DescribeBackupDBsResponse };