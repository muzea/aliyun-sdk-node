interface DescribeCandidateInstanceListRequest {
    "RegionId"?: string;
    "DbName": string;
    "PageSize": number;
    "PageNumber": number;
    "DrdsInstanceId": string;
    "Search"?: string;
    "AcrossZone"?: boolean;
}
export { DescribeCandidateInstanceListRequest };