interface ListJobsRequest {
    "RegionId"?: string;
    "ClusterId": string;
    "Owner"?: string;
    "State"?: string;
    "Rerunable"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListJobsRequest };