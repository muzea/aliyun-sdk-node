interface ListJobsRequest {
    "RegionId": string;
    "IsDesc"?: boolean;
    "PageNumber"?: number;
    "PageSize"?: number;
    "QueryType"?: string;
    "QueryString"?: string;
}
export { ListJobsRequest };