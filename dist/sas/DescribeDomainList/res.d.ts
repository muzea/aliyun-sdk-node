interface DescribeDomainListResponse {
    "code": number;
    "data": {
        "PageInfo": {
            "TotalCount": number;
            "PageSize": number;
            "CurrentPage": number;
            "Count": number;
        };
        "DomainListResponseList": {
            "Domain": string;
        }[];
    };
    "requestId": string;
    "success": boolean;
}
export { DescribeDomainListResponse };