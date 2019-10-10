interface QueryMediaCensorJobListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "JobId"?: string;
    "NextPageToken"?: string;
    "MaximumPageSize"?: number;
    "State"?: string;
    "StartOfJobCreatedTimeRange"?: string;
    "EndOfJobCreatedTimeRange"?: string;
    "PipelineId"?: string;
}
export { QueryMediaCensorJobListRequest };