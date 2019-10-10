interface DescribeAntChainCertificateApplicationsResponse {
    "code": string;
    "data": {
        "RequestId": string;
        "Result": {
            "Pagination": {
                "TotalCount": number;
                "PageSize": number;
                "PageNumber": number;
            };
            "CertificateApplications": {
                "Status": number;
                "AntChainId": string;
                "Username": string;
                "Createtime": number;
                "Updatetime": number;
                "Bid": string;
            }[];
        };
    };
    "requestId": string;
    "successResponse": boolean;
}
export { DescribeAntChainCertificateApplicationsResponse };