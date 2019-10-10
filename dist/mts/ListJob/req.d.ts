interface ListJobRequest {
    "RegionId"?: string;
    "NextPageToken"?: string;
    "MaximumPageSize"?: number;
    "State"?: string;
    "StartOfJobCreatedTimeRange"?: string;
    "EndOfJobCreatedTimeRange"?: string;
    "PipelineId"?: string;
}
export { ListJobRequest };