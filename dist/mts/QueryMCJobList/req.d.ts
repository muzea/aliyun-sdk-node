interface QueryMCJobListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "JobIds"?: string;
    "NextPageToken"?: string;
    "MaximumPageSize"?: number;
    "State"?: string;
    "StartOfJobCreatedTimeRange"?: string;
    "EndOfJobCreatedTimeRange"?: string;
    "PipelineId"?: string;
}
export { QueryMCJobListRequest };