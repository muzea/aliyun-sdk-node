interface GetCandidateInstanceListRequest {
    "RegionId"?: string;
    "DbName": string;
    "Search": string;
    "AcrossZone": boolean;
    "PageSize": number;
    "PageNumber": number;
    "DrdsInstanceId": string;
}
export { GetCandidateInstanceListRequest };