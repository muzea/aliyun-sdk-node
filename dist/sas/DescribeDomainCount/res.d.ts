interface DescribeDomainCountResponse {
    "code": number;
    "data": {
        "TotalDomainsCount": number;
        "RootDomainsCount": number;
    };
    "requestId": string;
    "success": boolean;
}
export { DescribeDomainCountResponse };