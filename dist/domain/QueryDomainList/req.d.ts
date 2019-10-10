interface QueryDomainListRequest {
    "RegionId"?: string;
    "PageNum": number;
    "PageSize": number;
    "EndExpirationDate"?: number;
    "StartExpirationDate"?: number;
    "UserClientIp"?: string;
    "Lang"?: string;
    "QueryType"?: string;
    "StartRegistrationDate"?: number;
    "EndRegistrationDate"?: number;
    "DomainName"?: string;
    "OrderByType"?: string;
    "OrderKeyType"?: string;
    "ProductDomainType"?: string;
    "DomainGroupId"?: string;
}
export { QueryDomainListRequest };