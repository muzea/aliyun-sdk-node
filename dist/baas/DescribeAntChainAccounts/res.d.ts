interface DescribeAntChainAccountsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Pagination": {
                "TotalCount": number;
                "PageSize": number;
                "PageNumber": number;
            };
            "Accounts": {
                "AccountStatus": string;
                "Account": string;
                "AntChainId": string;
                "AccountRecoveryKey": string;
                "AccountPublicKey": string;
            }[];
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainAccountsResponse };