interface QueryFpShotJobListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "JobIds"?: string;
    "NextPageToken"?: string;
    "MaximumPageSize"?: number;
    "State"?: string;
    "StartOfJobCreatedTimeRange"?: string;
    "EndOfJobCreatedTimeRange"?: string;
    "PrimaryKeyList"?: string;
    "PipelineId"?: string;
}
export { QueryFpShotJobListRequest };