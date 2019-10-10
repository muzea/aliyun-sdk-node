interface QueryCoverJobListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "CoverJobIds"?: string;
    "NextPageToken"?: string;
    "MaximumPageSize"?: number;
    "State"?: string;
    "StartOfJobCreatedTimeRange"?: string;
    "EndOfJobCreatedTimeRange"?: string;
    "PipelineId"?: string;
}
export { QueryCoverJobListRequest };